import React,{ Fragment } from "react";
import Button  from "../../Components/Button/index";
import curriculo from '../../documents/Erika_Skarda.pdf'
import {
    WrapperAbout,
    Text,
    AboutMeContainer,
    Knowledge, 
    Separator,
    TextButtonLink,
    StyledAvatar,
    Heart
   
} from "./styled"


function AboutMe(props) {

    const knowledges = [ 
                    "HTML", 
                    "CSS", 
                    "JavaScript", 
                    "TypeScript",
                    "SQL", 
                    "Node", 
                    "React", 
                    "Redux",
                     "AWS"
                    ]

    return (
        <Fragment >
            <WrapperAbout id="about">
                <Text>
                    <div style={{display:"flex", alignItems:"center"}}><h2>Sobre mim</h2><Heart></Heart></div>
                    <h3>Sou Engenheira de Podução formada pela UFF 
                        e Desenvolvedora Full Stack formada pela Labenu.
                        Recentemente participei do MegaHack e da Imersão Alura em React.
                        Adoro ler e fazer trilhas.
                    </h3>
                    <AboutMeContainer>
                        {knowledges && knowledges.map(knowledge => (
                            <div key={knowledge}>
                                <Separator>|</Separator>
                                <Knowledge style={{fontWeight:"bold"}}>{knowledge}</Knowledge>
                            </div>
                        ))}
                    </AboutMeContainer>
                   
                    <TextButtonLink    
                        href={curriculo} 
                        download = "curriculo-Erika.pdf"> 
                        <Button 
                             
                             texto = {"CV em PDF"}
                             showDowloadIcon = {true}
                             primary={true}  
                             secundary={true} 
                             hover={true}                 > 
                             
                       </Button>           
                   </TextButtonLink> 
                </Text>
                
                
                    <StyledAvatar
                        src={require("../../img/flor.png")} 
                        alt="Avatar Erika"
                    />
                
               
            </WrapperAbout>
        </Fragment>
    )
}

export default AboutMe;