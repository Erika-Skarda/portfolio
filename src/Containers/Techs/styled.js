import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/styles";

export const Container = styled.div`   
    background-color:${theme.darkblue};
    width:100%;
`


export const WrapperTech = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-right:12vw;
    margin-left:12vw;
    justify-self:center;
    column-gap:10vw;
    padding-bottom: 5vh;
    padding-top: 6vh;
   

        @media screen and (max-device-width: 850px){
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: 1fr 1fr;
            
        };
     
`;

export const FrontendContainer = styled.div`

       @media screen and (max-device-width: 850px){
        
            grid-row-start: 1;
    
       };
`;
export const BackendContainer = styled.div`

        @media screen and (max-device-width: 850px){
        
            grid-row-start: 2;
   
         };
`;

export const Title = styled.h2`

    color:${theme.pinkred};
    margin-left: 2vw;
    font-size: 4em;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.32px;
    -webkit-font-smoothing: antialiased;

      
        @media screen and (max-device-width: 1200px){
             font-size: 3.5em;
         };
        @media screen and (max-device-width: 850px){
            font-size: 2.5em;
        }
        @media screen and (max-device-width: 640px){
            font-size: 2.0em;
        }


`;

export const SubTitle = styled.h4 `

    color:${theme.white};
    margin-left: 2vw;
    font-size: 1.5em;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    font-weight: 100;

        @media screen and (max-device-width: 1200px){
            font-size: 1.3em;
        }
        /* @media screen and (max-device-width: 850px){
            font-size: 1.2em;
        } */
        @media screen and (max-device-width: 640px){
            font-size: 1.2em;
        }
        @media screen and (max-device-width: 480px){
            font-size: 1.1em;
        }


`