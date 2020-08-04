import styled from "styled-components";
import { theme } from "../../Theme/styles"
import Foto from "../../img/foto.jpg";

export const WrapperHome = styled.div`


`;
export const WrapperTitle = styled.div `
   display:flex;
   position:absolute;
   left:45%;
   top:28vh;
   z-index: 2;

        h2 {
        
            font-weight: 100;
            letter-spacing: -0.32px;
            text-align:start;
            color:${theme.white};
            -webkit-font-smoothing: antialiased;

                @media screen and (max-device-width: 480px){
                    
                    font-size: 1.25em;
                };
    
        }

        @media screen and (max-device-width: 1200px){

            position:absolute;
            left:40%;
            top:33vh;

        };
        @media screen and (max-device-width: 850px){
            position:absolute;
            left:45%;
            top:42vh;
                    
        };
        @media screen and (max-device-width: 640px){

            position:absolute;
            left:30%;
            top:80vh;
            
        };
        
`;

export const Name = styled.h1`

    color:${theme.white};
    font-size: 4em;
    margin-bottom:10px;
                    
        @media screen and (max-device-width: 1200px){
            
            font-size: 3.2em;
        }
        @media screen and (max-device-width: 850px){
        
            font-size: 2.5em;
        }
        @media screen and (max-device-width: 480px){
        
        font-size: 2em;
    }
`;

export const Profile = styled.main`

    background-image:url(${Foto});
    background-repeat:no-repeat;
    background-size:contain;
    height:60vh;
    background-color:${theme.pinkred};
    z-index:-1;
    
      @media screen and (max-device-width: 640px){
           background-size:cover;
            height:100vh; 
            width:100vw;

        }
`;

export const PinkFilter = styled.div`

    display:flex;
    flex-direction:column;
    background-color:${theme.lightpink}; 

       
`;
export const WrapperSocialIcon = styled.div`

    position:absolute;
    display:flex;
    flex-direction:column;
    margin-left:94%;
    margin-top:12%;
    z-index: 1;
    background-color:transparent;
    padding:10px;
    border:1px solid white;
    border-radius:2px;
    position:fixed;

        a {
            color: white;
            margin: 5px;
                :hover{
                    color: ${theme.darkblue};
                    text-decoration: none;
                 }
                :active{
                    color: ${theme.ligthBlue};
                }

        }
        img {

            padding-top:10px;
            width:30px;

               :hover{
                    color: ${theme.darkblue};
                   
                 }
                :active{
                    color: ${theme.ligthBlue};
                }
            
        };

        @media screen and (max-device-width: 1200px){
    
            margin-left:91%;
           
        };
        @media screen and (max-device-width: 850px){
    
            margin-left:89%;
   
        };
      
        @media screen and (max-device-width: 640px){
            display:flex;
            flex-direction:column;
            margin-left:80%;
            margin-top:50px;
        
        }

`;



