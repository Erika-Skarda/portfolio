import styled from 'styled-components';
import { theme } from "../../../Theme/styles";
import { RiArrowGoForwardLine } from "react-icons/ri";

export const WrapperAboutMe = styled.div`

   
 
`;
export const FlipCardBack = styled.div`
     min-height:100%;
     width:100%;
        @media screen and (max-device-width: 850px){

                

            };
    
        >p {    
                text-justify:center;
                color:${theme.white};
                text-align:center;
                font-weight:100;
                margin-left:0.5vw;
                margin-right:0.5vw; 
                font-size: 1.2em; 
               
                
                    @media screen and (max-device-width: 900px){

                        font-size: 0.9em;
                        
                    };

                    @media screen and (max-device-width: 640px){

                        font-size: 0.8em;
                    
                    };    
        
                    :first-of-type {

                        
                        font-weight:bold;
                        margin-top:5vh;

                        @media screen and (max-device-width: 900px){

                            margin-top:3vh;

                        };
                    };
   
                      
        }
              

        img {
             
              width:40%;
              margin-left:10vw;

                @media screen and (max-device-width: 850px){

                  

                };

        }

      
`;

export const FlipCardFront = styled.div`

    width:100%;
    min-height:100%;

       
            :first-child {

                font-size: 3.0em;
                font-weight:bold;
                color:${theme.white};
                text-align:center;
                margin:20px 0;
              

                @media screen and (max-device-width: 900px){

                    font-size: 2em;
               
                
                };
                 @media screen and (max-device-width: 640px){

                    font-size: 1.5em;
                 

                };
             
        }

        img {
             
              width:60%;
              margin-top:1ch;

                @media screen and (max-device-width: 900px){

                   
                    width:55%;

                };

        }
      
             
`;
export const StyledRiArrowGoForwardLine = styled(RiArrowGoForwardLine)`

    :hover {

            color:${theme.darkblue};
            cursor: pointer;
    }
`;