import React, { Component, Fragment} from "react";
import { WrapperAboutMe,
         FlipCardFront,
         FlipCardBack  } from "./styled";
import { theme } from "../../Theme/styles";
import ReactCardFlip from 'react-card-flip';

class FlipCard extends React.Component {
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
        
        <WrapperAboutMe >
            <ReactCardFlip 
                isFlipped={this.state.isFlipped} 
                flipDirection="horizontal"
                
            >
                    <FlipCardFront 
                        style={{
                            backgroundColor:`${theme.blush}`,
                            color: `${theme.white}`,
                            display: "flex",
                            flexDirection:"flex-end"
                            // justifyContent: "center",
                            // alignItems: "center"
                        }}
                           src={require("../../img/flor.png")} 
                            alt="Avatar" 
                            onClick={this.handleClick}>
                    
                    </FlipCardFront>
            
                    <FlipCardBack
                          style={{
                                backgroundColor:`${theme.blush}`,
                                color: `${theme.white}`,
                                display: "flex",
                                flexDirection:"flex-end"
                                // justifyContent: "center",
                                // alignItems: "center"
                            }}
                            src={require("../../img/costa.jpg")} 
                            alt="Avatar" 
                            onClick={this.handleClick}> 
                     
                    </FlipCardBack>

            
                
            </ReactCardFlip>
        </WrapperAboutMe>
    
      )
    }
  }
export default FlipCard;
 