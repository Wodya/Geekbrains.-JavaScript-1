'use strict'
class Board{
    snake;
    constructor(rows,cols) {
        this.rows = rows;
        this.cols = cols;
    }
    renderBoard(){
        const table = document.querySelector("table");
        for(let row=0; row < this.rows; row++){
            const tr = document.createElement("tr");
            table.appendChild(tr);
            for(let col=0; col < this.cols; col++) {
                const td = document.createElement("td",);
                tr.appendChild(td);
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
            }
        }
        this.newFood();
    }
    renderSnake(newCell,oldCell){
        document.querySelector(`td[data-row="${newCell.x}"][data-col="${newCell.y}`).classList.add("snake");
        if(oldCell !== null)
            document.querySelector(`td[data-row="${oldCell.x}"][data-col="${oldCell.y}`).classList.remove("snake");
    }
    newFood(){
        if(this.food !== undefined)
            document.querySelector(`td[data-row="${this.food.x}"][data-col="${this.food.y}`).classList.remove("food");
        do {
            this.food = {x: Math.floor(10*Math.random()), y: Math.floor(10*Math.random())};
        }while (this.snake.places.find(p => p.x === this.food.x && p.y === this.food.y))
        document.querySelector(`td[data-row="${this.food.x}"][data-col="${this.food.y}`).classList.add("food");
    }
}