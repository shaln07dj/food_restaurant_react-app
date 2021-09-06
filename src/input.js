import React from 'react';

/*function Inpt(props){
    return (<div>
        <input   type="text" name="email"  value={props.state.email} onChange={props.handleText}/></div>
    )
}
export default Inpt;*/
class Inputs extends React.Component {
    constructor (props){
        super(props)
    
}
    handleSubmit = (event) => {
        

     var val= this.inputNode.value
      console.log(this.inputNode.value)
      console.log(val)
    
      console.log(val)
    }
    render() {
      return (
        //<form onSubmit={this.handleSubmit}>
          
            <input
              type="text"
              name="username"
              onChange={this.handleSubmit}
              ref={node => (this.inputNode = node)}
            />
          
          //<button type="submit">Submit</button>
       // </form>
      )
    }
}
export default Inputs