import React from "react";
import { ProjectsContainer,
         TextProject,
         WrapperProject,
         WrapperProjectText,
         StyledFaGithub,
         WrapperProjectImage,
         WrapperProjectTextRevert,
         WrapperProjectRevert,
         WrapperProjectImageRevert } from "./styled";
import computer from "../../img/img1.png";
import tablet from "../../img/img2.png";
import celular from '../../img/img3.png';
import {ButtonStyled} from "../../Components/Button/styled";
import { FaGithub } from "react-icons/fa";
import { theme } from "../../Theme/styles";


function Projects() {

    return(

        <ProjectsContainer id="projects">
             <TextProject>
                <h3>Meus Projetos<span></span></h3>
            </TextProject>

            <WrapperProject>
                <WrapperProjectText>
                  
                        <h1>Labook</h1>
                        <h3>Back-end</h3>
                        <a href=" https://tchnezbuic.execute-api.us-east-1.amazonaws.com/dev" target="blank">
                            <small >deploy</small>
                        </a>
                       
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
                                    primary={true}
                                    secundary={true}
                                    hover={true}
                                    >
                                    Ver no Postman 
                    
                            </ButtonStyled>
                            </a>
                         
                        </span>
                
                </WrapperProjectText> 

                <WrapperProjectImage>
                    <a href="https://github.com/Erika-Skarda/API_Labook" target="blank">
                        <img src={computer} alt="imagem de um computador"/>
                    </a>
                </WrapperProjectImage>
          </WrapperProject>
            
         <WrapperProjectRevert> 
                <WrapperProjectImageRevert>
                    
                     <a href="https://github.com/Erika-Skarda/Whats4" target="blank"> 
                        <img src={tablet} alt="imagem de um tablet" />
                     </a>
                   
                </WrapperProjectImageRevert>
                <WrapperProjectTextRevert>
                  
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
                                     hover={false}
                            
                                >
                                    Ver no GitHub <StyledFaGithub />
                    
                            </ButtonStyled>
                        </a>
                        
                
                </WrapperProjectTextRevert> 
          </WrapperProjectRevert>

           <WrapperProject> 
                <WrapperProjectText>
                  
                        <h1>Cookenu</h1>
                        <h3>Back-end</h3>
                         <a href="https://polnb1x533.execute-api.us-east-1.amazonaws.com/dev" target="blank">
                            <small >deploy</small>
                        </a>
                        <p>
                        Esse produto nada mais é do que uma rede social,
                        na qual os usuários podem dividir informações relevantes 
                        sobre comidas e receitas que tenham experimentado.
                        Ela possui todas as funcionalidades mais comuns em redes sociais
                        </p>
                        <span>
                            <a href="https://github.com/Erika-Skarda/API_Cookenu_2" target="blank">
                            <ButtonStyled 
                                primary={false}
                                secundary={false}
                            
                                > 
                                Ver no GitHub <StyledFaGithub />
                            </ButtonStyled>
                            </a> 
        
                            <a href="https://documenter.getpostman.com/view/10904258/T17AkBfd?version=latest" target="blank">
                                <ButtonStyled 
                                    primary={true}
                                    secundary={true}
                                    hover={true}
                                    
                                    >
                                    Ver no Postman 
                    
                            </ButtonStyled>
                            </a>
                        </span>
                </WrapperProjectText> 
                <WrapperProjectImage>
                    <a href="https://github.com/Erika-Skarda/API_Cookenu_2" target="blank"> 
                        <img src={celular} alt="imagem de um computador"/>
                    </a>
                </WrapperProjectImage>
          </WrapperProject>

           <WrapperProjectRevert style={{marginBottom:"20px"}}> 
                <WrapperProjectImageRevert>
                    <a href="https://github.com/Erika-Skarda/Spotenu" target="blank"> 
                        <img src={computer} alt="imagem de um computador"/>
                    </a>
                </WrapperProjectImageRevert>
                <WrapperProjectTextRevert>
                  
                        <h1>Spotenu</h1>
                        <h3>Full Stack</h3> 
                        <a href="spotenu-erika.surge.sh" target="blank">
                            <small >deploy</small>
                        </a>
                        <p>
                         O Spotenu é um projeto que visa facilitar o acesso a músicas pelo mundo.
                         Para isso, vamos dar suporte para dois tipos de usuários: 
                         as bandas (ou músicos) e os ouvintes 
                         (usuários que consomem as músicas).
                        
                        </p>
                        <span>
                            <a href="https://github.com/Erika-Skarda/Spotenu" target="blank">
                                <ButtonStyled 
                                    primary={false}
                                    secundary={false}
                                    style={{width:"180px",
                                            height:"50px"}}
                                
                                    > 
                                    Ver no GitHub (Front-end)<StyledFaGithub style={{fontSize:"2em"}} />
                            </ButtonStyled>
                        </a>
                        <a href="https://github.com/Erika-Skarda/Spotenu_BackEnd" target="blank">
                            <ButtonStyled 
                                    primary={false}
                                    secundary={false}
                                    style={{width:"180px",
                                            height:"50px"}}
                                
                                    > 
                                    Ver no GitHub (Back-end)<StyledFaGithub style={{fontSize:"2em"}} />
                            </ButtonStyled>
                        </a>
                        </span>
                
                </WrapperProjectTextRevert> 
          </WrapperProjectRevert>

        </ProjectsContainer>
    )
}

export default Projects;