import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/styles";
import { FaGithub } from "react-icons/fa";


export const ProjectsContainer = styled.div`

    background-color:${theme.fadeBlue};
    max-width:100%;
   

  

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
    column-gap:8vw;
    padding-top:4vh;
`;
export const WrapperProjectRevert = styled.div`

    display:grid;
    grid-template-columns:repeat(2, 1fr);
    padding-top:4vh;

      
`
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
            line-height: 26px;

    }
    span {

        display:flex;
        gap:2vw;
    }
    a {
        text-decoration:none;
    }

`;
export const StyledFaGithub = styled(FaGithub) `

    margin-left:6px;
    font-size:1.2em;
`
export const WrapperProjectImage = styled.div``

export const WrapperProjectImageRevert = styled.div`

    display:flex;
    flex-direction:row-reverse;

        img {

            object-fit:contain;
        }
 `