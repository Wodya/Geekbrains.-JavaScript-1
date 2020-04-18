'use strict'
class Snake{
    places = [{x:0,y:0}];
    length = 1;
    direction = {dx:0,dy:1};
    win = 6;
    constructor(board) {
        this.board = board;
    }
    step(){
        let newCell = {x : this.places[0].x + this.direction.dx, y: this.places[0].y + this.direction.dy};
        if(newCell.x >= this.board.rows)
            newCell.x = 0;
        if(newCell.x < 0)
            newCell.x = this.board.rows-1;
        if(newCell.y >= this.board.cols)
            newCell.y = 0;
        if(newCell.y < 0)
            newCell.y = this.board.cols-1;

        //Проигрыш
        if(this.places.find(p => p.x === newCell.x && p.y === newCell.y))
            return {state: -1};

        this.places.unshift(newCell);
        let oldCell = null;
        if(this.places.length > this.length) {
            oldCell = this.places.pop();
        }
        if(newCell.x === this.board.food.x && newCell.y === this.board.food.y) {
            if(++this.length === this.win)
                return {state : 1};
            this.board.newFood();
        }
        return {newCell,oldCell};
    }
    changeDirection(direction){
        if(direction.dx === this.direction.dx || direction.dy === this.direction.dy)
            return;
        this.direction = direction;
    }
}