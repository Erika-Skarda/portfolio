import styled from "styled-components";
import { theme } from "../../Theme/styles"
import Foto from "../../img/foto.jpg";

export const WrapperHome = styled.div`
    /* display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr 1fr; */


`;
export const WrapperTitle = styled.div `
   display:flex;
   position:absolute;
   left:50%;
   top:20vh;
   z-index: 2;

        h2 {
        
            font-weight: 100;
            letter-spacing: -0.32px;
            text-align:start;
            color:${theme.white};
            -webkit-font-smoothing: antialiased;

                @media screen and (max-device-width: 850px){
        
                    font-size: 1.5em;
                };
                @media screen and (max-device-width: 850px){
        
                    font-size: 1.5em;
                    
                };
                @media screen and (max-device-width: 480px){
                    
                    font-size: 1.25em;
                };
    
        }

        @media screen and (max-device-width: 640px){

        
            position:absolute;
            left:30%;
            top:72vh;
            

        }
   
`;

export const Name = styled.h1`

    color:${theme.white};
    font-size: 3em;
    margin-bottom:10px;
    
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
    margin-left:93%;
    margin-top:10%;
    z-index: 1;
    background-color:transparent;
    padding:10px;
    border:1px solid white;
    border-radius:2px;
    position:fixed;
        img {

            padding-top:10px;
            width:30px;
         
        };
        @media screen and (max-device-width: 1200px){

            display:flex;
            flex-direction:row;
            margin-left:60%;
            margin-top:350px;

            img {
                padding-top:0;
                width:30px;
                margin-left:10px;
      
            };
   
        }
        @media screen and (max-device-width: 640px){
            
            margin-top:720px;
    

        }


`





