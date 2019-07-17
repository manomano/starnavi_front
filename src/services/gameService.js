import React, {Component } from 'react';

class GameService  /*extends Component*/{

    winners = [];
    gameModes = [];

    constructor(){
        //super();
        this.setAllProps();
    }


    setAllProps(){
        this.winners = this.getGames();
        this.gameModes = this.getGames();
    }
    generateGameModes(){
        return [
            {field:50 * 4, delay:1000},
            {field:50 * 5, delay:1000},
            {field:50 * 6, delay:1000},
            {field:50 * 7, delay:1000},
            {field:50 * 8, delay:1000},

            {field:50 * 4, delay:1500},
            {field:50 * 5, delay:1500},
            {field:50 * 6, delay:1500},
            {field:50 * 7, delay:1500},
            {field:50 * 8, delay:1500},

            {field:50 * 4, delay:2000},
            {field:50 * 5, delay:2000},
            {field:50 * 6, delay:2000},
            {field:50 * 7, delay:2000},
            {field:50 * 8, delay:2000}
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


