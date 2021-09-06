import React from 'react'
import { render } from 'react-dom'
import ChildA from './ChildA'
import ChildB from './ChildB'
import Sum from './sum'
import Inpt from './input'
import Inputs from './input'

class Dashboard extends React.Component{
    constructor (props){
        super(props)
        this.state={
            name:'Jack',
            listOfNames:['Peter','Adam','Ellie','Alfred'],
            s1:7,
            s2:7
        }
    }

    handleChange=()=>{
        this.setState({name:'Jhon'})
        
        var c=parseInt(prompt("enter the val"))
        this.setState({s1:c})
        console.log(this.setState({s1:c}))

    }
   /* handleChanges=(e)=>{
        this.setState({email: e.target.value})
    }*/
render(){
    return(<div >
        This is my class base Component!
        <h3>{this.state.name}</h3>
        <ChildB nameList={this.state.listOfNames}></ChildB>
       
        <ChildA handleMe={this.handleChange}/>
        <Sum c={this.state.s1} b={this.state.s2}/>
        <Inputs/>
        {console.log(this.a)}
            </div>

    )
}
}

export default Dashboard;
