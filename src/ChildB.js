import React from'react'

class ChildB extends React.Component{
    
    constructor(props)
    {
        super(props)
    }

    render(){
        return(<ul>{
        this.props.nameList.map(function (val){return <li><p className="txt">{val}</p></li>
      
            
    
        
       })}</ul>)

    }
}

export default ChildB