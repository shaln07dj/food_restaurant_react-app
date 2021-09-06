import React from 'react';

export default class ChildA extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
            <input/>
            <button onClick={this.props.handleMe}> Change Me</button>

            <button onClick={this.props.handleMe}> Change Me</button>

        </div>)
    }
}