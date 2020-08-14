import styled from 'styled-components';
import { theme } from "../../../Theme/styles";
import { RiArrowGoForwardLine } from "react-icons/ri";

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
                font-size: 1.5em; 
                    
                    @media screen and (max-device-width: 1200px){

                        font-size: 1em;

                    };
               
                
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

  
    display:flex;
    flex-direction:row;
    gap:2px;

       
            :first-child {

                font-size: 3.0em;
                font-weight:bold;
                color:${theme.white};
                text-align:center;
                margin:20px 0;

                @media screen and (max-device-width: 1200px){

                    font-size: 2.5em;

                };
              

                @media screen and (max-device-width: 980px){

                    font-size: 2em;
               
                
                };
                 @media screen and (max-device-width: 640px){

                    font-size: 1.5em;
                 

                };
             
        }

        img {
             
              width:60%;
              margin-top:1ch;
              margin-left: 4vw;

                @media screen and (max-device-width: 900px){

                   
                    width:55%;
                    margin-top: 4ch;

                };

        }
      
             
`;
export const StyledRiArrowGoForwardLine = styled(RiArrowGoForwardLine)`
    margin-right:10px;
    :hover {

            color:${theme.darkblue};
            cursor: pointer;
    }
`;