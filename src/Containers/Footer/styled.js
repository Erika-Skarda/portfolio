import styled from "styled-components";
import { theme } from "../../Theme/styles";

export const FooterContainer = styled.div`
    height: 10vh;
    margin: 0;
    background-color: ${theme.ligthBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5vw;
    color:${theme.white};
    font-size: 1.5em;

    @media screen and (max-device-width: 1200px){
        font-size: 1em;
        height: 8vh;
    }
`