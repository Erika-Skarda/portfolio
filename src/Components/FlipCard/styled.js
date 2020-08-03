import styled from 'styled-components';
import { theme } from "../../Theme/styles";

export const WrapperAboutMe = styled.div`

    background-color:${theme.blush};
 
`;
export const FlipCardBack = styled.img`

        border-radius: 50%;
        border: 10px solid white;
        width: 336px;
        height:336px;
        float: right;
        margin-left:70vw;
`;

export const FlipCardFront = styled.img`
      
        border-radius: 50%;
        border: 10px solid white;
        width: 20%;
        float: right;
        margin-left:70vw;       
`;
