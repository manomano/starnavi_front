import React, {Component } from 'react';
import GameService from '../services/gameService';
import Toolbar from './toolBar';



const borders = ['1px solid #CFD8DC','1px solid blue','1px solid red', '1px solid green'];
const backgrounds = ['white','blue', 'red', 'green' ];


export default class CellsFrame extends Component{


    state = {
        reds: 0,
        greens:0,
        gameModes:null,
        winners:null,
    }

    size = 6;
    theMatrix = [];
    gameService = null


    constructor(props) {
        super(props);
        this.setParams = this.setParams.bind(this);
        this.state.winners = GameService.winners;
        this.state.gameModes = GameService.gameModes;
        this.state.frameWidth = 300;
        this.state.size = this.state.frameWidth/50;
        this.state.mode = null;
        this.state.name = null;
        this.generateMatrix();
    }

    generateMatrix(){
        //blank = 0; blue = 1; red = 2; green = 3;
        this.theMatrix = [];
        //alert(this.state.frameWidth/50);
        let row = [...new Array(this.state.size)].map(x=>x=0);

        for (let i = 0; i < this.state.size; i++) {
            this.theMatrix.push([...row]);
        }
    }

    setParams(data){
        console.log(data)
        this.setState({mode: data.mode, name: data.name, frameWidth: data.mode.field, size:this.state.frameWidth/50},
            () => this.play()
        );

    }

    play(){
         this.generateMatrix();

    }

    render(){

        return(
            <div>{this.state.frameWidth}
                <Toolbar gameModes ={GameService.gameModes} setParams={this.setParams}/>
                <div  style={{'width':(this.state.frameWidth+'px'), 'height':(this.state.frameWidth+'px')}}>
                    {
                        this.theMatrix.map(function (row, rowIndex) {
                            return (
                                <div className="row" key={rowIndex}>
                                    {
                                        row.map(function (value, itemIndex) {
                                        return (
                                            <div style={{'border': borders[value], 'width':'50px', 'height':'50px'}} key={rowIndex+'-'+itemIndex} className="col-sm {styles.cell}">

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



