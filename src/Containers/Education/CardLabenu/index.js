import React from "react";
import { 
         FlipCardFront,
         FlipCardBack,
         StyledRiArrowGoForwardLine  } from "./styled";
import ReactCardFlip from 'react-card-flip';
import labenu from "../../../img/labenu.gif";
import labenuLogo from "../../../img/labenu_logo.png";


class FlipCardLabenu extends React.Component {
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
                         <p style={{display:"inline"}}>Educação 
                         
                         
                         </p>  <StyledRiArrowGoForwardLine/>
                         <img 
                            src={labenu}
                            alt="Logo da Labenu"
                        />
                           
                    
                    </FlipCardFront>
            
                    <FlipCardBack
                            onClick={this.handleClick}> 
                            <img 
                                src={labenuLogo}
                                alt="Logo da Labenu"
                           > 
                               
                          </img>
                          <p>Curso Web Full-Stack Labenu</p>

                          <p>Curso de Desenvolvimento Web Full-Stack - 1º semestre 2020</p>
                            {/* <p>
                              Curso completo de desenvolvimento web, com duração de 6 meses em tempo integral, 
                              somando mais de 1000 horas de código.
                          </p> */}
                    </FlipCardBack>
            </ReactCardFlip>
      
    
      )
    }
  }
export default FlipCardLabenu;