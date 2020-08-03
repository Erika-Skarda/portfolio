import React, { Component, Fragment} from "react";
import { ButtonStyled, 
         IconDownload } from "./styled";
import { theme } from "../../Theme/styles";

const Button = (props) => {

    return(

       <ButtonStyled  
        style = 
       {{backgroundColor:  props => props.primary ? 
        `${theme.pinkred}`:`${theme.darkblue}` 
        }}
        >
          {props.texto}
          {props.showDowloadIcon ? <IconDownload /> : "" } 
       </ButtonStyled>
       
    )

};

export default Button;