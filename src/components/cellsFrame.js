import React, {Component } from 'react';
import GameService from '../services/gameService';
import Toolbar from './toolBar';


export default class CellsFrame extends Component{


    state = {
        reds: 0,
        greens:0,
        gameModes:null,
        winners:null,
    }

    size = 10;
    theMatrix = [];
    gameService = null


    constructor(props) {
        super(props);

        console.log(GameService.gameModes);
        this.state.winners = GameService.winners;
        this.state.gameModes = GameService.gameModes;

        this.generateMatrix();

        //this.handleSubmit = this.handleSubmit.bind(this);
        //this.getDataFromServer()
    }

    generateMatrix(){
        //blank = 0; blue = 1; red = 2; green = 3;
        let row = [...new Array(this.size)].map(x=>x=0);

        for (let i = 0; i < this.size; i++) {
            this.theMatrix.push([...row]);
        }
    }

    render(){

        return(
            <div>
                <Toolbar gameModes ={GameService.gameModes} />
                <div  style={{'width':'300px', 'height':'300px'}}>
                    {
                        this.theMatrix.map(function (row, rowIndex) {
                            return (
                                <div className="row" key={rowIndex}>
                                    {
                                        row.map(function (el, itemIndex) {
                                        return (
                                            <div style={{'border': '1px solid #CFD8DC', 'width':'50px', 'height':'50px'}} key={rowIndex+'-'+itemIndex} className="col-sm {styles.cell}">

                                            </div>
                                        )}
                                    )}
                                </div>
                            );
                        })
                    }

                </div>
            </div>
         )
    }


};



