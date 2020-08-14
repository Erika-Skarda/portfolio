import styled,  { keyframes } from 'styled-components'

export const StyledSection = styled.section `
    width: inherit; 
    color: ${(props) => props.textColor};  
    background-color: ${(props) => props.bgColor};
    height:fit-content;
    display: flex; 
    flex-direction: column;
`
export const SectionTitle = styled.h2 `
    width: fit-content;
    margin: 70px auto 30px auto;
    font-size: 40px;
    letter-spacing:-0.15px;
    font-weight:100;
   
    @media(max-width: 520px){
        font-size: 27px;
        margin: 45px auto 20px;
    }
`   
export const SectionContent = styled.div `
    padding: 0px 6vw 40px;
`
export const animation = keyframes `
    {
        0% {content: '💻'}

        50%{content: '🚀';}

        100%{content: '📱';}
    }
`;

export const Span = styled.span `
    :before {
        content: '';
        animation: ${animation} 3s infinite;
    }

`