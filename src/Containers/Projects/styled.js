import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/styles";
import { FaGithub } from "react-icons/fa";


export const ProjectsContainer = styled.div`

    background-color:${theme.fadeBlue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const animation = keyframes `
    {
        0% {content: '💻'}

        50%{content: '🚀';}

        100%{content: '📱';}
    }

`;
export const TextProject = styled.div`
    
    margin-bottom: 5vh;

    h3 {
            font-size: 2.5em;
            text-align: center;
            margin:0;
            color:${theme.white};
            letter-spacing:-0.15px;
            font-weight:100;
            padding-top:13.5vh;
        };

    span::before {
        content: '';
        animation: ${animation} 3s infinite;
    }
`;
export const WrapperProject = styled.div`

    display:grid;
    grid-template-columns:repeat(2, 1fr);
    column-gap: 12.5vw;
    width: 90%;
    margin-top:2vh;

        @media screen and (max-device-width: 1200px) {

            width:100%;
            column-gap: 10vw;
            margin-right:12vw;
        }
        @media screen and (max-device-width: 980px) {

            width:100%;
            column-gap: 5vw;
            margin-right: 14.5vw;
            
        }
        @media screen and (max-device-width: 880px) {

            display:grid;
            grid-template-rows:repeat(1, 1fr);
            grid-template-columns: repeat(1, 1fr);
        }
        @media screen and (max-device-width: 480px) {

            display:grid;
            grid-template-rows:repeat(1, 1fr);
            grid-template-columns: repeat(1, 1fr); 
            margin-right: 45.5vw;
        }


       
`;
export const WrapperProjectRevert = styled.div`

    display:grid;
    grid-template-columns:repeat(2, 1fr);
    column-gap: 10.5vw;
    width: 90%;
    padding-top:5vh;

        @media screen and (max-device-width: 1200px) {

            width:100%;
            column-gap: 10vw;
          
        }
        @media screen and (max-device-width: 980px) {

            width:100%;
            column-gap: 8vw;

        }
        @media screen and (max-device-width: 880px) {

            display:grid;
            
            grid-template-rows:repeat(1, 1fr);
            grid-template-columns: repeat(1, 1fr);
        }
        
        span {

            @media screen and (max-device-width: 440px) {
                margin-left: -7vw;

            }

        }
`;
export const WrapperProjectText = styled.div`

    width: 65%;
    margin: auto;
    margin-right:-1.5vw;
    @media screen and (max-device-width: 1200px) {

       
       
    }

    h1 {
            font-size: 3.2em;
            color:${theme.white};
            letter-spacing:-0.25px;
            margin: revert;
            text-shadow: 0.1em 0.1em 0.3em black;

            @media screen and (max-device-width: 980px) {

                font-size:2.9em;

            }

                
            
        };
    h3 {
            color:${theme.white};
            font-size: 2em;
            letter-spacing:-0.28px;
            font-weight:100;
            margin: unset;

                @media screen and (max-device-width: 980px) {

                    font-size:1.8em;

                }

            
    };

    p {
            color:${theme.white};
            font-size:1.1em;
            letter-spacing:-0.16px;
            font-weight:100;
            line-height: 26px;
                @media screen and (max-device-width: 980px) {

                    font-size:1em;

                }

        }
    span {

        display:flex;
        gap:2vw;
    }
    a {
        text-decoration:none;
    }
    small{

        :first-of-type {

            font-size:1.5em;
            padding-top:10px;
            color:${theme.darkblue};
            cursor:pointer;
            line-height:grid-auto-columns;

        :hover {

            color:${theme.blush};
        }

    }
}

        

`;
export const WrapperProjectTextRevert = styled.div `

    width: 70%;
    margin: auto;
    margin-right: 10.5vw;

    @media screen and (max-device-width: 1200px) {

        margin-right:16vw;

    }

    h1 {
            font-size: 3.2em;
            color:${theme.white};
            letter-spacing:-0.25px;
            margin: revert;
            text-shadow: 0.1em 0.1em 0.3em black;

                @media screen and (max-device-width: 980px) {

                    font-size:2.9em;

                }

     };            
            
       
    h3 {
            color:${theme.white};
            font-size: 2em;
            letter-spacing:-0.28px;
            font-weight:100;
            margin: unset;

                @media screen and (max-device-width: 980px) {

                    font-size:1.8em;

                }
    };

    p {
            color:${theme.white};
            font-size:1.1em;
            letter-spacing:-0.16px;
            font-weight:100;
            line-height: 26px;

                @media screen and (max-device-width: 980px) {

                        font-size:1em;

                }

    }

    }
    span {

        display:flex;
        gap:2vw;
    }
    a {
        text-decoration:none;
    }

    small{

        :first-of-type {

            font-size:1.5em;
            padding-top:10px;
            color:${theme.darkblue};
            cursor:pointer;
            line-height:grid-auto-columns;

            :hover {

                color:${theme.blush};
            }

        }
    };
`
export const StyledFaGithub = styled(FaGithub) `

    margin-left:6px;
    font-size:1.2em;
`
export const WrapperProjectImage = styled.div`

    width: fit-content;
    padding-top: 5vh;
    cursor:pointer;


        @media screen and (max-device-width: 1200px) {

            width:70%;
        }
        @media screen and (max-device-width: 980px) {

            width:60%;
        }
        @media screen and (max-device-width: 880px) {

           display:none;
        }
        

`

export const WrapperProjectImageRevert = styled.div`

    display:flex;
    flex-direction:row-reverse;
    margin-left:14vw;
    width: fit-content;
    padding-top: 5vh;


        img {

            object-fit:contain;
            cursor:pointer;
              
        }
        @media screen and (max-device-width: 1200px) {

             width:70%;
             margin-left:8vw;
        }
        @media screen and (max-device-width: 880px) {

            display:none;
        }
 `