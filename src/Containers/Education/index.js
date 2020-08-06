import React from "react";
import { ContainerEducation,
        CardLabenu,
        CardUFF,
        CardVan } from "./styled";
import FlipCardLabenu from "./CardLabenu/index"
import FlipCardUFF from "./CardUFF";
import FlipCardVan from "./CardVan"

class Education extends React.Component {
    constructor() {
        super();
        this.state = {
       
        };
        
    }
  
  render() {

    return(
        <ContainerEducation id="education">
           
            <CardUFF>

                <FlipCardUFF />

            </CardUFF>
            
            <CardLabenu> 
             
                <FlipCardLabenu />

            </CardLabenu>

            <CardVan>
              
                <FlipCardVan />

            </CardVan>


        </ContainerEducation>


    )
 }
    
}
export default Education;