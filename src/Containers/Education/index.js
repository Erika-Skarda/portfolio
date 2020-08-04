import React from "react";
import { ContainerEducation,
        CardLabenu,
        CardUFF,
        CardVan } from "./styled";
import uff from "../../img/uff.png";
import vanzolini from "../../img/vanzolini.png";
import FlipCardLabenu from "./CardLabenu/index"

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
       
        };
        
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
             
                <FlipCardLabenu />

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