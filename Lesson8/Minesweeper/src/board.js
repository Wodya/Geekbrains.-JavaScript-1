'use strict'
class Board{
    gameStep;
    gameMark;
    constructor(rows,cols, gameStep, gameMark) {
        this.rows = rows;
        this.cols = cols;
        this.gameStep = gameStep;
        this.gameMark = gameMark;
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
        table.addEventListener("click",this.click)
        window.addEventListener("contextmenu",this.rightClick)
    }
    click = (event) => {
        let {row , col } = this.getData(event.target);
        if(col === undefined || row === undefined)
            return;
        this.gameStep(row, col);
    }
    rightClick = (event) => {
        event.preventDefault();
        let {row, col} = this.getData(event.target);
        if(col === undefined || row === undefined)
            return;

        this.gameMark(row, col);
    }
    getData(element){
        if(element.parentElement?.parentElement.tagName === "TD")
            element = element.parentElement.parentElement;
        if(element.tagName !== "TD") return undefined;
        return {row:+element.getAttribute("data-row"), col:+element.getAttribute("data-col")};
    }
    getCell(row,col) {
        return  document.querySelector(`td[data-row="${row}"][data-col="${col}`);
    }
    open(row,col){
        this.getCell(row,col).classList.add("open");
        this.mark(row, col, false)
    }
    mark(row, col ,isMark){
        this.getCell(row,col).innerHTML =  isMark?"<i class=\"fas fa-flag\"></i>":"";
    }
    setNumber(row, col ,number){
        this.getCell(row,col).innerHTML =  number;
    }
    showMine(row, col){
        this.getCell(row,col).classList.add("mine");
    }

}