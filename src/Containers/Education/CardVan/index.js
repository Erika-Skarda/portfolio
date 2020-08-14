import React from "react";
import { 
         FlipCardFront,
         FlipCardBack,
         StyledRiArrowGoForwardLine  } from "./styled";
import ReactCardFlip from 'react-card-flip';
import vanzolini from "../../../img/vanzolini.png";


class FlipCardVan extends React.Component {
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
                                src={vanzolini}
                                alt="Logo da Vanzolini"
                           > 
                               
                          </img> <StyledRiArrowGoForwardLine/>
                           
                    
                    </FlipCardFront>
            
                    <FlipCardBack onClick={this.handleClick}> 
                           
                            <p>Fundação Vanzolini</p>

                            <p>Curso de Capacitação em Gestão da Qualidade e de Processos - 2º semestre de 2019</p>
                            {/* <p>
                            O Curso de Capacitação em Gestão da Qualidade e de Processos capacita o participante nas mais modernas
                            metodologias, ferramentas e práticas de Gestão da Qualidade e Gestão por Processos e torna-o apto a melhorar sistemas,
                            processos, atividades e, consequentemente, obter ganhos de desempenho na organização onde atua.
                          </p> */}
                    </FlipCardBack>
            </ReactCardFlip>
      
    
      )
    }
  }
export default FlipCardVan;