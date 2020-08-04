import styled, { keyframes } from "styled-components";
import { theme } from "../../Theme/styles";

export const ContainerEducation = styled.div`

   justify-self:center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* margin-right:12vw;
    margin-left:12vw;
   ;
    column-gap:10vw; */


`

export const CardLabenu = styled.div`
  
    background-color:${theme.pinkred};
    display:flex;
    flex-direction:column;
    padding:18px;
        @media screen and (max-device-width: 900px){
       
          padding:10px;

        };
`;

export const CardUFF = styled.div`

    background-color:${theme.blush};

    
        img {

            margin-left: 7vw;
            width: 53%;
            margin-top: 5vh;

            @media screen and (max-device-width: 850px){

                margin-top:10vh;

            };
        }
`;

export const CardVan = styled.div`

    background-color:${theme.ligthBlue};

    
         img {

            margin-left: 2vw;
            width: 88%;
            margin-top: 8vh;

                @media screen and (max-device-width: 850px){

                    margin-top: 10vh;
                  

                };
        }
`
