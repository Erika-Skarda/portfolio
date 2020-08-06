import styled from "styled-components";
import { theme } from "../../Theme/styles";

export const ContainerEducation = styled.div`

   justify-self:center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
 
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
    display:flex;
    flex-direction:column;
    padding:15px;

        @media screen and (max-device-width: 900px){
       
          padding:10px;

        };
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
