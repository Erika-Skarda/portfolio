import React from "react";
import { ProjectsContainer,
         TextProject,
         WrapperProject,
         WrapperProjectText,
         WrapperProjectImage } from "./styled";
import computer from "../../img/img1.png";
import Button from "../../Components/Button"


function Projects() {

    return(

        <ProjectsContainer>
             <TextProject>
                <h3>Meus Projetos</h3>
            </TextProject>

            <WrapperProject>
                <WrapperProjectText>
                  
                        <h1>Labook</h1>
                        <h3>Back-end</h3>
                        <p>
                            A API Labbok foi criada para ser usada como uma rede social
                            com o objetivo de promover a conexão e interação entre seus mais 
                            diversos usuários. Os usuários podem criar posts de dois tipos 
                            ("evento" ou "normal"), comentá-los e curti-los também.
                        </p>
                        <Button 
                             
                             texto = {"Ver no GitHub"}
                             showDowloadIcon = {false}
                             primary={true}
                        > 
                             
                       </Button>
                        
                
                </WrapperProjectText> 

                <WrapperProjectImage>
                    <img src={computer} alt="imagem de um computador"/>
                </WrapperProjectImage>
          </WrapperProject>


        </ProjectsContainer>
    )
}

export default Projects;