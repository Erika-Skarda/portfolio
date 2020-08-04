import React, { Component, Fragment} from "react";
import { WrapperHome,
         Profile,
         PinkFilter,
         WrapperTitle,
         Name,
         WrapperSocialIcon} from "./styled";

import Header from "../../Components/Header/Header"

const Home = () => {

    return(
        <Fragment> 
            <div>
            <Header /> 
            
            <WrapperHome> 
               
                <PinkFilter>   
                    <Profile>     
                   
                   </Profile>
                    <WrapperSocialIcon>
                            <a href="https://github.com/Erika-Skarda" target="blank">
                                <img src={require("../../img/gitsvg.svg")}></img>
                            </a>
                      
                       
                            <a href="https://www.linkedin.com/in/erika-skarda" target="blank">
                                <img src={require("../../img/link.svg")}></img>
                            </a>
                     
                      
                            <a href="https://twitter.com/skard0" target="blank">
                                <img src={require("../../img/twi.svg")}></img>
                            </a>
                       
                            <a href="https://api.whatsapp.com/send?phone=+5511944846258" target="blank">
                                <img src={require("../../img/whatsapp.svg")}></img>
                            </a> 
                        

                    </WrapperSocialIcon>

                      <WrapperTitle>
                        <div>
                            <Name>Oi, eu sou a Erika</Name>
                            <h2>Desenvolvedora Web Full Stack</h2>
                        
                        </div>
                      </WrapperTitle>      
                </PinkFilter>


            </WrapperHome>
            </div>
        </Fragment>
       
    )


};

export default Home;