import React from "react";
import { 
         FlipCardFront,
         FlipCardBack,
         StyledRiArrowGoForwardLine  } from "./styled";
import ReactCardFlip from 'react-card-flip';
import uff from "../../../img/uff.png";


class FlipCardUFF extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
   
    render() {
      return (
        
        
            <ReactCardFlip 
                isFlipped={this.state.isFlipped} 
                flipDirection="horizontal"
                
            >
                    <FlipCardFront 
                            onClick={this.handleClick}
                         >   
                         
                         <img 
                            src={uff}
                            alt="Logo da UFF"
                        />
                        {/* <StyledRiArrowGoForwardLine/>   */}
                    
                    </FlipCardFront>
            
                    <FlipCardBack
                            onClick={this.handleClick}> 
                           
                         
                          <p>UFF</p>

                          <p>Graduação em Engenharia de Produçã - 1º semestre 2017</p>
                          
                    </FlipCardBack>
            </ReactCardFlip>
      
    
      )
    }
  }
export default FlipCardUFF;