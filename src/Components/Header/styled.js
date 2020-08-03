import styled from 'styled-components';
import { theme } from "../../Theme/styles";
import MenuIcon from '@material-ui/icons/Menu';

export const Container = styled.div`
  
    height: 60px;
    padding-top:0;
    width: 100vw;
    position: fixed;
    z-index:10;
   
`;

export const Navigation = styled.nav`

   border:none;
   display:flex;
  
   position: absolute;
   right: 41px;

    @media screen and (max-device-width: 640px){
        display: none;
    }
`;

export const WrapperMobile = styled.div`
    display: none;


    @media screen and (max-device-width: 640px){
        display: flex;

        
    }

`
export const MenuIconStyled = styled(MenuIcon)`
    color:${theme.white};
        :hover {
            color:${theme.darkblue};
        }
   
    

`;

export const Link= styled.a`
    color:${theme.darkblue};
    z-index:1;
    opacity:none;
    text-decoration: none;
    cursor: pointer;
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

        @media screen and (max-device-width: 640px){
            
            display: flex;
            font-size: 1.1em;
            border-bottom:1px solid black;
            margin-left:3px;
            padding:8px;
            background-color:"transparent",
    
    }


`;

export const Img = styled.img `
    height: 100%; 
    border-radius: 5px;
    cursor: pointer;
`