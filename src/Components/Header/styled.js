import styled from 'styled-components';
import { theme } from "../../Theme/styles";
import MenuIcon from '@material-ui/icons/Menu';

export const NavBar = styled.nav`

    width: 100%;
    z-index: 1;
    height: 80px;
    background-color: transparent;
    position: fixed;
    display: flex;
    align-items: center;
    box-shadow: 0px 1px 10px #aaaaaa;
    justify-content: flex-end;
    
`
export const NavMenu = styled.ul`

    list-style-type: none;
    display: flex;
        li {

            padding: 0 15px;

        }
        li a {
            text-decoration:none;
            display: block;
            color: ${theme.white};
            font-stretch: normal;
            font-style: normal;
            font-size: 1.45em;
            line-height: normal;
            letter-spacing: -0.22px;
            -webkit-font-smoothing: antialiased;

                &:hover, 
                &:active {
                    color: ${theme.blush}; 
                };
        }

        @media screen and (max-width: 720px) {

            display:inline-grid;
            padding-top: 324px;
            right: 0px;
            position: absolute;
            width:100%;
            
                li {

                    transform: scaleY(${props => props.open ? "1" : "0"});
                    transform-origin: top;
                    transition: transform 0.5s ease;
                    background-color: ${theme.pinkred};
                    opacity:0.7;
                    border-bottom: 1px solid ${theme.white};
                    padding: 10px;


                }

        }

`
export const HambIcon = styled.span `
        display: none;

        @media(max-width: 720px){
            display: block;
            color:${theme.white};
            margin-right: 20px;
            z-index: 1;
            width: 50px;
            height: 100%;
            :hover {
               
                color: ${theme.blush};
            }
            :active {
               
                color: ${theme.fadeBlue};
            }
        } 
    p{  margin: 0px;
        color: ${theme.darkBlue};
        text-align: center;
        padding: 15px 14px;
        text-decoration: none;
        font-size: 26px;
        display: flex;
        align-items: center;
        height: 100%;
        :hover{
            cursor: pointer;
        }
    }
`






















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
    z-index:10;
    color:${theme.white};
        :hover {
            color:${theme.darkblue};
        }
   
    

`;

export const Link= styled.a`
    color:${theme.white};
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
            color: ${theme.darkblue}; 
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
export const LinkHome = styled.a`
    color:${theme.white};
    z-index:1;
    text-decoration: none;
    cursor: pointer;
    margin-left: 1vw;
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
            
            width:0;
            display:none;
    
    }


`;

export const Img = styled.img `
    height: 100%; 
    border-radius: 5px;
    cursor: pointer;
`