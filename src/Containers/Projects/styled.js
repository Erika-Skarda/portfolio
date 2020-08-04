import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/styles";

export const ProjectsContainer = styled.div`

    background-color:${theme.fadeBlue};
    max-width:100vw;
   

  

`;

export const TextProject = styled.div`

    h3 {
            font-size: 2.5em;
            text-align: center;
            margin:0;
            color:${theme.white};
            letter-spacing:-0.15px;
            font-weight:100;
            padding-top:3.5vh;
        };

`;
export const WrapperProject = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    column-gap:10vw;
    padding-top:4vh;
`;

export const WrapperProjectText = styled.div`
    margin-left: 20vw;

    h1 {
            font-size: 3.0em;
            color:${theme.white};
            letter-spacing:-0.25px;
            margin: revert;
            
        };
    h3 {
            color:${theme.white};
            font-size: 2em;
            letter-spacing:-0.28px;
            font-weight:100;
            margin: unset;
    };

    p {
            color:${theme.white};
            font-size:1.1em;
            letter-spacing:-0.16px;
            font-weight:100;

    }

`;
export const WrapperProjectImage = styled.div``
