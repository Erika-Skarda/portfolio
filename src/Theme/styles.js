import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap");
  
  body {
    margin: 0;
    padding: 0;
    font-family:'Montserrat Alternates', sans-serif;
    
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
    ligthBlue: "#85a9d9",
    lightpink: "rgba(242, 99, 99, 0.41)",
    borderButton: "rgba(0, 0, 0, 0.5)",
    fadeBlue: "#7b7fbf"
   
  };
  