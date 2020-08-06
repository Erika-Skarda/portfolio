import styled from "styled-components";
import { theme } from "../../Theme/styles";
import GetAppIcon from '@material-ui/icons/GetApp';

export const ButtonStyled  = styled.button `
    display:flex;
    justify-content:center;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: ${theme.white};
    border-radius:8px;
    width:160px;
    height: 35px;
    padding: 0.5em 1em;
    outline: none;
    border: none; 
    box-shadow: 2px 2px 6px ${theme.borderButton};

     background-color: ${props => props.primary ? 
        `${theme.pinkred}`:`${theme.darkblue}`}; 

    overflow: hidden;
    transition: color 0.4s ease-in-out;
  
        :before {
            content: '';
            z-index: -1;
            position: absolute;
            bottom: 100%;
            right: 100%;
            width: 1em;
            height: 1em;
            border-radius: 50%;

            background-color: ${props => props.secundary ? 
           `${theme.blush}`:`${theme.ligthBlue}`}; 

            transform-origin: center;
            transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
            transition: transform 0.45s ease-in-out;
        }
        
        :hover {
            background-color: ${props => props.hover? 
           `${theme.blush}`:`${theme.ligthBlue}`}; 
        }
        
        :hover::before {
            transform: translate3d(50%, 50%, 0) scale3d(15, 15, 15);
        } 
  `;
export const IconDownload = styled(GetAppIcon)`
     margin-left:4px;
    
    
  `