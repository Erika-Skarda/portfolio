import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/styles";
import { Avatar } from "@material-ui/core";

export const WrapperAbout = styled.div`
     background-color: ${theme.blush};
     min-height: 70vh;
     display: flex;
     padding: 4vh 4vh;
     color: ${theme.darkblue};
     position: relative;
       
`;
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    /* justify-content: center; */
    margin-left: 10vw;

      
        h2 {
                font-size: 3.5em;
                font-weight: bold;
                margin-bottom: 3.5vh;
                margin-right: 3vw;
                

                    @media screen and (max-device-width: 1200px){
                        font-size: 3.0em;
                    }
                    @media screen and (max-device-width: 850px){
                        font-size: 2.5em;
                    }
                    @media screen and (max-device-width: 640px){
                        font-size: 2.0em;
                    }
        }
        h3 {
                font-size: 1.5em;
                margin-bottom: 1vh;
                text-align: justify;
                font-weight:100;

                    @media screen and (max-device-width: 1200px){
                        font-size: 1.3em;
                    }
                    @media screen and (max-device-width: 850px){
                        font-size: 1.2em;
                    }
                    @media screen and (max-device-width: 640px){
                        font-size: 1.1em;
                    }
        }
    @media screen and (max-device-width: 1200px){
        
        width: 95vw;
        margin: auto;
    }
`;

export const AboutMeContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin: 4vh 0;
`;
export const TextButtonLink = styled.a`

    text-decoration:none;
    color:white;
    margin-top:20px;
`;

export const Separator = styled.span`
    font-size: 1.4em;
    background-color: ${theme.white};
    color: ${theme.white};
    margin-right: 0.25vw;

        @media screen and (max-device-width: 1200px){
            font-size: 1em;
            margin-right: 1vw;
        
        }
`;

export const Knowledge = styled.h3`
    margin-right: 1vw;
    display: inline;
    font-size: 1.5em;
    font-weight: bold;
  

        &:hover, 
        &:active {
            color: ${theme.pinkred}; 
        };
    @media screen and (max-device-width: 1200px){
        font-size: 1em;
        margin-right: 2vw;
    }
`
export const StyledAvatar = styled.img`

    margin-left:8vw;
    margin-top:3vh;
    border-radius:50%;
    border:10px solid white;
    width:25%;
    height:25%;

        @media screen and (max-device-width: 1200px){
            width: 0;
            border:none;
        }
        `;
const batidao = keyframes `

    0% {transform:  rotate(45deg) scale(1);}
    25% {transform:  rotate(45deg) scale(1);}
    30% {transform:  rotate(45deg) scale(1.4);}
    50% {transform:  rotate(45deg) scale(1.2);}
    70% {transform:  rotate(45deg) scale(1.4);}
    100% {transform:  rotate(45deg) scale(1);}
`

export const Heart = styled.div `

    position: relative;
    width: 20px;
    height: 20px;
    background-color: ${theme.pinkred};
    transform: rotate(45deg);
    animation: ${batidao} 1.4s linear infinite;

:before {

    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.pinkred};
    transform: translateY(-50%);
    border-radius: 50%;
}
:after {
    content:'' ;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:${theme.pinkred};
    transform: translateX(-50%);
    border-radius: 50%;
}
`;
