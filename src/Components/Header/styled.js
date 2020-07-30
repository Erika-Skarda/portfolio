import styled from 'styled-components';
import { theme } from "../../Theme/styles"

export const Container = styled.div`
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 100vw;
  height: 13vh;
  padding: 5px;
  background: transparent; */
  background-color:${theme.pinkred};
  justify-content: center;
    height: 60px;
    padding: 0 2vw;
    margin: 0;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

export const Navigation = styled.nav`
  background-color:${theme.pinkred};
  border:none;
  color:transparent;
  display:flex;
  padding-left:80%;
  
    @media screen and (max-device-width: 1200px){
        display: none;
    }
`;
export const WrapperMobile = styled.div`
    display: none;
  

 
    @media screen and (max-device-width: 1200px){
        display: flex;

        
    }

`

export const Link= styled.a`
    color:${theme.darkblue};
    text-decoration: none;
    cursor: pointer;
    font-family: "'Montserrat Alternates', sans-serif;";
    margin-left: 2vw;
    font-size: 1.5em;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    -webkit-font-smoothing: antialiased;
        &:hover, 
        &:active {
            color: ${theme.blush}; 
        };

        @media screen and (max-device-width: 1200px){
        display: flex;
        font-size: 1.1em;
        border-bottom:1px solid black;
        margin-left:0;
        padding:5px;
        
        
    }


`

export const Img = styled.img `
 height: 100%; 
 border-radius: 5px;
 cursor: pointer;
`