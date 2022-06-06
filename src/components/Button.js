import React,{Component} from "react";
import '../style.css'

export class Button extends Component {
   
    render(){
const {className='',buttontext,type='',onClick} = this.props;
     return(
             <button
              className={className}
              type={type}
                onClick={
                    ()=>{
                        if(onClick) onClick();
                    }}
                >
                    {buttontext}
                    </button>
           );
     }
}
export default Button;