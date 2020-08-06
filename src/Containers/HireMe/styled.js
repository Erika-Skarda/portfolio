import styled from "styled-components";
import { theme } from "../../Theme/styles";


export const HireMeWrapper = styled.div`
    min-height: 70vh;
    margin: 0;
    background-color: ${theme.darkblue};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10vh 30vw;
    color: ${theme.white};

        h2 {

            font-size: 4em;
            font-weight: bold;
            margin-bottom: 6vh;
                @media screen and (max-device-width: 1200px){
                    font-size: 3.5em;
                    margin-bottom: 4vh;
                }
        }
        p {

            text-align: center;
            font-size: 1.5em;
            margin-bottom: 1.5vh;
                 @media screen and (max-device-width: 1200px){
                     font-size: 1.3em;
                 }
                 @media screen and (max-device-width: 980px){
                     font-size: 1.1em;
                 }
        }
        b {

            color:${theme.blush};
            line-height: 2;
        }
    @media screen and (max-device-width: 1200px){
        padding: 5vh 5vw;
        min-height: 40vh;
    }
`

export const Email = styled.span`
    font-style:italic;
    font-weight: bold;
    cursor: pointer;
    color:${theme.blush};
`

export const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6vh;

        @media screen and (max-device-width: 1200px){
            margin-top: 4vh;
        }

        img {

            cursor: pointer;
            width: 3vw;
            margin-right: 2vw;
                @media screen and (max-device-width: 1500px){
                    width: 4vw;
                    margin-right: 4vw;
                }
                @media screen and (max-device-width: 1500px){
                    width: 6vw;
                    margin-right: 4vw;
                }
                @media screen and (max-device-width: 1500px){
                    width: 7vw;
                    margin-right: 4vw;
                }

        }
`

