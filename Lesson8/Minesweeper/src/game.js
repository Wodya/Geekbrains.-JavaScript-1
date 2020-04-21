'use strict'
class Game{
    rows = 10;
    cols = 10;
    minesCount = 10;
    timer;
    board;
    field;
    mines=[];
    states = {none : 0, mark : 1, open : 2};
    isGameEnd = false;
    run(){
        this.board = new Board(this.rows, this.cols, this.gameStep, this.gameMark);
        this.board.renderBoard();
        this.field = Array(this.rows).fill(0).map(p => Array(this.cols).fill(this.states.none));
        for(let i = 0;i < this.minesCount; i++){
            let mine;
            do{
                 mine = {x:Math.floor(this.rows*Math.random()), y:Math.floor(this.cols*Math.random())};
            }while(this.mines.find(p => p.x === mine.x && p.y === mine.y));
            this.mines.push(mine);
        }
    }
    gameStep = (row,col) => {
        if(this.isGameEnd || row < 0 || row >= this.rows || col < 0 || col >= this.cols)
            return;
        if(this.field[row][col] === this.states.open)
            return;
        if(this.mines.find(p => p.x === row && p.y === col))
            this.finish(false);

        this.board.open(row,col);
        this.field[row][col] = this.states.open;
        let around = this.getMinesAroundCount(row, col);
        if(around === 0) {
            [   {x: row - 1, y: col - 1}, {x: row - 1, y: col}, {x: row - 1, y: col + 1},
                {x: row, y: col - 1}, {x: row, y: col + 1},
                {x: row + 1, y: col - 1}, {x: row + 1, y: col}, {x: row + 1, y: col + 1}].
            forEach(p => this.gameStep(p.x, p.y));
        } else
            this.board.setNumber(row, col, around);


        if(this.rows*this.cols - this.field.flat().filter(p => p === this.states.open).length === this.mines.length)
            this.finish(true);
    }
    showMines(){
        this.mines.forEach(p => this.board.showMine(p.x,p.y));
    }
    getMinesAroundCount(row,col){
        if(this.isGameEnd || row < 0 || row >= this.rows || col < 0 || col >= this.cols)
            return null;
        return  this.getCellMine(row-1,col-1) + this.getCellMine(row-1,col) + this.getCellMine(row-1,col+1) +
                this.getCellMine(row,col-1) + this.getCellMine(row,col+1) +
                this.getCellMine(row+1,col-1) + this.getCellMine(row+1,col) + this.getCellMine(row+1,col+1);
    }
    getCellMine(row, col){
        return this.mines.find(p => p.x === row && p.y === col) === undefined? 0: 1;
    }
    gameMark = (row, col) =>{
        if(this.field[row][col] === this.states.open)
            return;
        let isMark = this.field[row][col] === this.states.none;
        this.board.mark(row, col, isMark);
        this.field[row][col] = isMark?this.states.mark:this.states.none;
    }
    finish(win){
        this.isGameEnd = true;
        let finish = document.querySelector(".finish");
        finish.innerHTML = win?"Вы выиграли":"Вы проиграли";
        finish.classList.add("rotate-scale-up");

        this.showMines();

    }
}

new Game().run();