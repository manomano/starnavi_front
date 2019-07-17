import React from 'react';



const ToolBar = (props) => {
    return(
        <div className="row">
            <div>

                <select className="browser-default custom-select custom-select-lg mb-3">
                    {props.gameModes.map(function (row,index){
                        return ( <option value={index}>field size: {row.field} delay: {row.delay}ms</option>)
                    })}

                </select>

                <select className="custom-select custom-select-sm">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

            </div>
            <div></div>
            <div></div>
        </div>
    )
}


export default ToolBar
