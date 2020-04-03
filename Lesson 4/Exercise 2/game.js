'use strict'
const player = {
    x : 0,
    y : 0
}
class MoveObj {
    constructor(x,y) {
        this.x = x
        this.y = y;
    }
}
const move = {
    1: new MoveObj(-1, 1),
    2: new MoveObj(0, 1),
    3: new MoveObj(1, 1),
    4: new MoveObj(-1, 0),
    6: new MoveObj(1, 0),
    7: new MoveObj(-1, -1),
    8: new MoveObj(0, -1),
    9: new MoveObj(1, -1),
}

function render() {
    console.clear();
    for (let i=0; i < 10; i++) {
        let str = `${i+1}:   `;
        for (let j = 0; j < 10; j++) {
            if(player.x == j && player.y == i){
                str += "O ";
            } else{
                str += "X ";
            }
        }
        console.log(str + "\n");
    }
}
function getDirection() {
    while (true) {
        const str = prompt(`Введите число ${ Object.getOwnPropertyNames(move)}. Для выхода 5`);
        const dir = parseInt(str);
        if(dir == 5 || str == undefined)
            return null;
        if(isNaN(dir) || !move.hasOwnProperty(dir)){
            console.log("Вы ввели неверное число. Попробуйте снова")
            continue;
        }
        let curMove = move[dir];
        if(player.x + curMove.x < 0 || player.x + curMove.x >= 10 || player.y + curMove.y < 0 || player.y + curMove.y >= 10)
        {
            console.log("Вы упёрлись в стену, попробуйте снова")
            continue;
        }
        return curMove;
    }
}
while(true) {
    render();
    let dir =  getDirection();
    if(dir == null)
        break;
    player.x += dir.x;
    player.y += dir.y;
}