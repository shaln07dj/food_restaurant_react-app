class NameForm extends React.Component {
    constructor(props){
      var val;
     
        super(props)
        
  
        
        this.state={
           c:0,
           sum:0
        }}
      

    handleSubmit = (event) => {
    
    //var b;
        
    //b=(this.inputNode.value)
this.setState({c:parseInt(event.target.value)})

        

   // return b;
    }
    
    
   

  
    render() {
     
      return (
            <div style={{marginLeft:"60px"}} ><h3>Enter The Value To Add/Sub</h3>
            <input style={{width:"20em",height:"2em",border:"1px solid",borderRadius:"5px"}}onChange={this.handleSubmit}
              type="text"
              name="username"
              ref={node => (this.inputNode = node)}
            /><br/>
            <p>{this.c}</p>
            
            <Expo value={this.state.c}/>
            </div>
         
      )
    }
}

export default NameForm;