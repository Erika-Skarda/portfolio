import React from "react";
import { ProjectsContainer,
         TextProject,
         WrapperProject,
         WrapperProjectText,
         StyledFaGithub,
         WrapperProjectImage,
         WrapperProjectRevert,
         WrapperProjectImageRevert } from "./styled";
import computer from "../../img/img1.png";
import tablet from "../../img/img2.png";
import {ButtonStyled} from "../../Components/Button/styled";
import { FaGithub } from "react-icons/fa";


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
                            A API Labook foi criada para ser usada como uma rede social
                            com o objetivo de promover a conexão e interação entre seus mais 
                            diversos usuários. Os usuários podem criar posts de dois tipos 
                            ("evento" ou "normal"), comentá-los e curti-los também.
                        </p>
                         <span>
                            <a href="https://github.com/Erika-Skarda/API_Labook" target="blank">
                                <ButtonStyled 
                                    primary={false}
                                    secundary={false}
                            
                                >
                                    Ver no GitHub <StyledFaGithub />
                    
                            </ButtonStyled>
                            </a>
                            <a href="https://documenter.getpostman.com/view/10904258/T17AjBDu?version=latest" target="blank">
                                <ButtonStyled 
                                    primary={false}
                                    secundary={false}
                                    
                                    >
                                    Ver no Postman 
                    
                            </ButtonStyled>
                            </a>
                         
                        </span>
                
                </WrapperProjectText> 

                <WrapperProjectImage>
                     <img src={computer} alt="imagem de um computador"/>
                </WrapperProjectImage>
          </WrapperProject>
            
          <WrapperProjectRevert> 
                <WrapperProjectImageRevert>
                     <img src={tablet} alt="imagem de um tablet"/>
                </WrapperProjectImageRevert>
                <WrapperProjectText>
                  
                        <h1>Whats4</h1>
                        <h3>Front-end</h3>
                        <p>
                            Rede social baseada no whatsapp.
                            Ele consiste em uma página que permite ao usuário colocar seu nome e uma 
                            mensagem que deseja enviar; e, então, essas informações aparecem na tela. 
                            Além disso, se o usuário digitar "eu" (como remetente) a mensagem aparece 
                            com um layout diferente (indicando que foi enviado pelo dono da conta). 
                        </p>
                        <a href="https://github.com/Erika-Skarda/Whats4" target="blank">
                                <ButtonStyled 
                                    primary={false}
                                    secundary={false}
                            
                                >
                                    Ver no GitHub <StyledFaGithub />
                    
                            </ButtonStyled>
                            </a>
                        
                
                </WrapperProjectText> 
          </WrapperProjectRevert>

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
                        <ButtonStyled 
                            primary={false}
                            secundary={false}
                        
                            > 
                             Ver no GitHub
                       </ButtonStyled>
                        
                
                </WrapperProjectText> 
                <WrapperProjectImage>
                     <img src={computer} alt="imagem de um computador"/>
                </WrapperProjectImage>
          </WrapperProject>
          <WrapperProject> 
                <WrapperProjectImage>
                     <img src={computer} alt="imagem de um computador"/>
                </WrapperProjectImage>
                <WrapperProjectText>
                  
                        <h1>Labook</h1>
                        <h3>Back-end</h3>
                        <p>
                            A API Labbok foi criada para ser usada como uma rede social
                            com o objetivo de promover a conexão e interação entre seus mais 
                            diversos usuários. Os usuários podem criar posts de dois tipos 
                            ("evento" ou "normal"), comentá-los e curti-los também.
                        </p>
                        <ButtonStyled 
                            primary={false}
                            secundary={false}
                        
                            > 
                             Ver no GitHub
                       </ButtonStyled>
                        
                
                </WrapperProjectText> 
          </WrapperProject>

        </ProjectsContainer>
    )
}

export default Projects;