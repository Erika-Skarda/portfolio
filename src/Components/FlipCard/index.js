import React from "react";
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
                          
                        }}
                            onClick={this.handleClick}
                            src={this.props.image1}>
                    {this.props.textCardFront}
                    
                    </FlipCardFront>
            
                    <FlipCardBack
                          style={{
                                backgroundColor:`${theme.blush}`,
                                color: `${theme.white}`,
                                display: "flex",
                        
                            }}
                            src={this.props.image2}
                            onClick={this.handleClick}> 
                      {this.props.textCardBack}
                     
                    </FlipCardBack>
            </ReactCardFlip>
        </WrapperAboutMe>
    
      )
    }
  }
export default FlipCard;
 