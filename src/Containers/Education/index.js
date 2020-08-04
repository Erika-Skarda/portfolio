import React from "react";
import FlipCard from "../../Components/FlipCard";
import { ContainerEducation,
        CardLabenu,
        CardUFF,
        CardVan } from "./styled";
import { theme } from "../../Theme/styles";
import ReactCardFlip from 'react-card-flip';
import labenu from "../../img/labenu.gif";
import uff from "../../img/uff.png";
import vanzolini from "../../img/vanzolini.png";

class Education extends React.Component {
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

    return(
        <ContainerEducation id="Educacao">
           

            <CardUFF>
            <img 
                 src={uff}
                 alt="Logo da UFF"
                />

            </CardUFF>
            
            <CardLabenu> 
                <p>Educação</p>
                <img 
                 src={labenu}
                 alt="Logo da Labenu"
                />           
            </CardLabenu>

            <CardVan>
                <img 
                 src={vanzolini}
                 alt="Logo da Vanzolini"
                />

            </CardVan>


        </ContainerEducation>


    )
 }
    
}
export default Education;