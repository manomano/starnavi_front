import React from 'react';


export class ToolBar extends React.Component {
//const ToolBar = (props) => {
    //browser-default custom-select custom-select-lg mb-3
    constructor(props){
        super(props)
    }

    state = {
        selectedMode: null,
        name:''

    }

    onSubmit = () => {
        let obj = {name :this.refs.name.value, mode:this.refs.mode.value};
        this.props.setParams(obj);
    }



    render() {

        return(
            <div className="row" style={{'margin':'20px'}}>
                <div className="col">

                    <select className="form-control" ref="mode">
                        <option></option>
                        {this.props.gameModes.map(function (row,index){
                            return ( <option key={row.key } value={index}>field size: {row.field} delay: {row.delay}ms</option>)
                        })}

                    </select>

                </div>
                <div className="col">
                    <input type="text" ref="name" placeholder="Enter your name" id="exampleForm2" className="form-control"/>
                </div>
                <div className="col">
                    <button type="button" onClick={this.onSubmit} className="btn btn-primary">Play</button>
                </div>
            </div>
        )
    }


}


export default ToolBar
