import react, {components} from 'react';

import  "./de.js"
import de from './de.js';
 
function displaydes(props) {
    
        console.log(props)
    return(
          <div className='app'>
       <h1> {props.name ="face1"}
        {props.name ="face2"}
        {props.name ="face3"}
        {props.name ="face4"}
        {props.name ="face5"}
        {props.name ="face6"}</h1>

        </div>
    )
    
}
export default displaydes;
function button() {
    console.log(button)
    return(
        <div className='app'>
            <button>lancerDe</button>
        </div>
    )
     
    
}
export default button;

 class specifie extends de.js{
    
    constructor(props)
    super(props)
    
        {this.state= props.random 
        

        }
        lancerde(){
            <button>lancerDe</button>
        }
    }
    
     

    export  default specifie; 

 

/* function etat (props) {
    this.setstate
    
} */


