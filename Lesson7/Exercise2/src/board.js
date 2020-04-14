'use strict'
class board{
    /**
     * @param {Number} rows - количестов строк
     * @param {Number} cols - количиество столбцов
     * @param {Function} turn - Функция хода
     */
    constructor(rows, cols, turn) {
        this.rows = rows;
        this.cols = cols;
        this.turn = turn;
        window.addEventListener("click",this.playerClick.bind(this))

    }
    playerClick(event){
        const row = +event.target.dataset.row;
        const col = +event.target.dataset.col;
        if(col === undefined || row === undefined || event.target.innerText !== "")
            return;
        this.turn(row,col);
    }
    /**
     * Отрисовка поля
     */
    render(){
        let table = document.querySelector("table");
        for(let row=1; row <= this.rows; row++){
            const tr = document.createElement("tr");
            table.appendChild(tr);
            for(let col=1; col <= this.rows; col++) {
                const td = document.createElement("td",);
                tr.appendChild(td);
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
            }
        }
    }
    setToken(row,col,token){
        document.querySelector(`td[data-row="${row}"][data-col="${col}"]`).innerHTML = token;
    }
}