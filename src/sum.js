import React from 'react';
import Inpt from './input';

function Sum(props){
    var a=props.c;var b=props.b,sum=0;
   
    var m=(props.c);
     sum = a+b ;
     <input/>
    {console.log(m,sum,props.c,b)}
    /*function add(){
        sum= 7+9;
return(
    <button onClick={add}>Addition</button>);}*/
    
    return(
        <div> Sum = {sum}
        <div><h3>{props.c}</h3> </div></div>

    );
    
    
    
}
export default Sum