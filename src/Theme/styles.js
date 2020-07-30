import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat Alternates','sans-serif';
   
  }
  
  * {
    box-sizing: border-box;
  }
  button {
    cursor: pointer;
  }
`;
export const theme = {
    pinkred: "#f26363",
    blush: "#f2c49b",
    darkblue: "#263f8c",
    white: "#ffffff",
    ligthBlue: "#85a9d9"
   
  };
  