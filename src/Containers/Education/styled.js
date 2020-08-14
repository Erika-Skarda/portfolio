import styled from "styled-components";
import { theme } from "../../Theme/styles";

export const ContainerEducation = styled.div`

   justify-self:center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-device-width: 900px){
       
     height:250px;
     align-self:center;

     };
 
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
    padding:18px;

        @media screen and (max-device-width: 900px){
       
          padding:10px;

        };
`;

export const CardVan = styled.div`

    background-color:${theme.ligthBlue};
    display:flex;
    flex-direction:column;
    padding:18px;
    
         img {

            margin-left: 2vw;
            width: 90%;
            margin-top: 8vh;

                @media screen and (max-device-width: 880px){

                    margin-top: 10vh;
                    width:100%;
                  

                };
        }
`
