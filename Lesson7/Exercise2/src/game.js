'use strict'
class game{
    rows = 3;
    cols = 3;
    playerText = document.querySelector(".player");
    isWin = false;

    /**
     * Запуск игры
     */
    run(){
        this.board = new board(this.rows, this.cols, this.turn.bind(this));
        this.initTokens();
        this.board.render();
        this.changePlayer();
    }
    initTokens(){
        this.tokens = new Array(this.rows).fill(0).map(() => new Array(this.cols));
    }

    /**
     * Ход игрока
     * @param {Number} row - строка
     * @param {Number} col - колонка
     */
    turn(row, col){
        if(this.isWin)
            return;
        this.tokens[row-1][col-1] = this.playerNo;
        this.board.setToken(row,col,this.playerNo === 1 ? "X":"O")
        if(this.checkWin()){
            this.playerWin();
        } else {
            this.changePlayer();
        }
    }
    /**
     * Смена пользователя
     */
    changePlayer(){
        this.playerNo = (this.playerNo??2) !== 1 ? 1: 2;
        this.playerText.innerText = `Ходит игрок: ${this.playerNo}`;
    }
    /**
     * Победа пользователя
     */
    playerWin(){
        this.playerText.innerText = `Игрок ${this.playerNo} победил !!!`;
        this.playerText.classList.add("red");
        this.isWin = true;
    }
    /**
     * Проверка выиграша
     * @returns {boolean}
     */
    checkWin(){
        return this.checkPoints([{x:0,y:0},{x:0,y:1}, {x:0,y:2}]) || this.checkPoints([{x:1,y:0},{x:1,y:1}, {x:1,y:2}]) || this.checkPoints([{x:2,y:0},{x:2,y:1}, {x:2,y:2}]) ||
        this.checkPoints([{x:0,y:0},{x:1,y:0}, {x:2,y:0}]) || this.checkPoints([{x:0,y:1},{x:1,y:1}, {x:2,y:1}]) || this.checkPoints([{x:0,y:2},{x:1,y:2}, {x:2,y:2}]) ||
        this.checkPoints([{x:0,y:0},{x:1,y:1}, {x:2,y:2}]) || this.checkPoints([{x:2,y:0},{x:1,y:1}, {x:0,y:2}]);
    }

    /**
     * Проверка совпадения точек (либо все 1, либо все 0)
     * @param {{x:Number, y: Number}[]} points Список точек для проверки
     * @returns {boolean}
     */
    checkPoints(points){
        let token = null;
        for(let point of points)
        {
            if(token === null)
                token = this.tokens[point.x][point.y];
            if(token === undefined || token !== this.tokens[point.x][point.y])
                    return false;
        }
        return true;
    }
}

window.addEventListener("load",() => new game().run());