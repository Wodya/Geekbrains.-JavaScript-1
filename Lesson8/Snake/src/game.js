'use strict'
class Game{
    rows = 10;
    cols = 10;
    timer;
    board;
    run(){
        this.board = new Board(this.rows,this.cols);
        this.snake = new Snake(this.board);
        this.board.snake = this.snake;
        this.board.renderBoard();
        this.timer = setInterval(this.step.bind(this),200);
        window.addEventListener("keydown",this.keyDown.bind(this));
    }
    step(){
        let step = this.snake.step();
        if(step.state !== undefined) {
            if (step.state === -1) {
                document.querySelector(".finish").innerHTML = "Вы проиграли";
            } else if (step.state === 1) {
                document.querySelector(".finish").innerHTML = "Вы выиграли";
            }
            clearInterval(this.timer);
        }
        this.board.renderSnake(step.newCell,step.oldCell);
        document.querySelector(".length").innerHTML = `Текущий счёт ${this.snake.length} / ${this.snake.win}`;
    }
    keyDown(event){
        let direction;
        switch (event.key) {
            case "ArrowLeft":
                direction = {dx:0,dy:-1};
                break;
            case "ArrowRight":
                direction = {dx:0,dy:1};
                break;
            case "ArrowUp":
                direction = {dx:-1,dy:0};
                break;
            case "ArrowDown":
                direction = {dx:1,dy:0};
                break;
        }
        this.snake.changeDirection(direction);
    }
}

new Game().run();