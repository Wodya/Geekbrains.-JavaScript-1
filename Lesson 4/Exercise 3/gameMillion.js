'use strict'
let game = {
    gameQuest : [
        {
            question :'Сколько будет 2+2',
            answers : ['2','3','4','5'],
            right : 2
        },
        {
            question :'Как говорит кукушка',
            answers : ['гав','ку-ку','мяу','иа'],
            right : 1
        },
        {
            question :'Сколько будет 2+3',
            answers : ['2','3','4','5'],
            right : 3
        },
        {
            question :'Сколько будет 2+6',
            answers : ['2','3','4','5','8'],
            right : 4
        },
        {
            question :'Почём опиум для народа',
            answers : ['2','3','4','5'],
            right : 1
        },
    ],
    run(){
        let rightAnswers;
        do {
            rightAnswers = 0;
            for (let item of this.gameQuest) {
                let answer;
                do {
                    answer = prompt(`${item.question}:\n${item.answers.map((p, q) => `${q + 1}.   ${p}`).join('\n')}`);
                    if (answer === null) {
                        console.log("Игра закончена")
                        return;
                    }
                    answer = parseInt(answer);
                }while(!Number.isInteger(answer))
                if (answer === item.right + 1)
                    rightAnswers++;
            }
        }
        while (confirm(`Правильных ответов ${rightAnswers}. Сыграть ещё?`));
    }
}