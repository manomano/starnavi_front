//import React, {Component } from 'react';

class GameService  /*extends Component*/{

    // winners = [];
    // gameModes = [];

    constructor(){
        //super();
        this.setAllProps();
    }


    setAllProps(){
        this.winners = this.getGames();
        this.gameModes = this.generateGameModes();
    }
    generateGameModes(){
        return [
            {key:1, field:50 * 4, delay:1000},
            {key:2,field:50 * 5, delay:1000},
            {key:3,field:50 * 6, delay:1000},
            {key:4,field:50 * 7, delay:1000},
            {key:5,field:50 * 8, delay:1000},

            {key:6,field:50 * 4, delay:1500},
            {key:7,field:50 * 5, delay:1500},
            {key:8,field:50 * 6, delay:1500},
            {key:9,field:50 * 7, delay:1500},
            {key:10,field:50 * 8, delay:1500},

            {key:11,field:50 * 4, delay:2000},
            {key:12,field:50 * 5, delay:2000},
            {key:13,field:50 * 6, delay:2000},
            {key:14,field:50 * 7, delay:2000},
            {key:15,field:50 * 8, delay:2000}
        ]
    }

    getGameModes () {
        return localStorage.getItem('gameModes')?JSON.parse(localStorage.getItem('gameModes')):[];
    }

    SaveGame(winner) {
        let record = {winner: winner, date: new Date()};
        this.winners.push(record);
        this.winners.sort((a,b)=>b.date - a.date);
        // let records = [record];
        // if(winnersStorage){
        //     records = JSON.parse(winnersStorage).push(record);
        // }
        localStorage.setItem('winners',this.winners);

    }

    getGames() {
        let winners = JSON.parse(localStorage.getItem('winners'));
        if(winners) winners.sort((a,b)=>b.date - a.date);
        return winners;
    }

}

// let thisGameService =  new GameService()
// export {thisGameService}

export default new GameService()


