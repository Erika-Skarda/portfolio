import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/styles";

export const ContainerEducation = styled.div`

   justify-self:center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* margin-right:12vw;
    margin-left:12vw;
   ;
    column-gap:10vw; */


`

export const CardLabenu = styled.div`
  
    background-color:${theme.pinkred};
    display:flex;
    flex-direction:column;

        p {

            font-size: 2.0em;
            font-weight:bold;
            color:${theme.white};
            margin-bottom: 4vh;
            text-align:center;
            font-weight:100;

                @media screen and (max-device-width: 850px){

                    font-size: 1.8em;
                    margin-bottom: 5vh;
                
                };
                @media screen and (max-device-width: 850px){

                    font-size: 1.5em;
                    margin-bottom: 5vh;

                };
        }

        img {
             
              width:50%;
              margin-left:8vw;

                @media screen and (max-device-width: 850px){

                    margin-bottom: 7vh;
                    width:55%;

                };

        }

`;

export const CardUFF = styled.div`

    background-color:${theme.blush};
    
        img {

            margin-left: 7vw;
            width: 53%;
            margin-top: 5vh;

            @media screen and (max-device-width: 850px){

                margin-top:10vh;

            };
        }
`;

export const CardVan = styled.div`

    background-color:${theme.ligthBlue};

    
         img {

            margin-left: 2vw;
            width: 88%;
            margin-top: 8vh;

                @media screen and (max-device-width: 850px){

                    margin-top: 10vh;
                  

                };
        }
`
