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
            <Header /> 
            
            <WrapperHome> 
               
                <PinkFilter>   
                    <Profile>     
                   
                   </Profile>
                    <WrapperSocialIcon>
                            <a href="#https://github.com/Erika-Skarda">
                                <img src={require("../../img/gitsvg.svg")}></img>
                            </a>
                      
                       
                            <a href="https://www.linkedin.com/in/erika-skarda">
                                <img src={require("../../img/link.svg")}></img>
                            </a>
                     
                      
                            <a href="https://twitter.com/skard0">
                                <img src={require("../../img/twi.svg")}></img>
                            </a>
                       
                            {/* <a href="erikaskarda#9825">
                                <img src={require("../../img/discord.png")}></img>
                            </a> */}
                        

                    </WrapperSocialIcon>

                      <WrapperTitle>
                        <div>
                            <Name>Oi, eu sou a Erika</Name>
                            <h2>Desenvolvedora Web Full Stack</h2>
                        
                        </div>
                      </WrapperTitle>      
                </PinkFilter>


            </WrapperHome>
        </Fragment>
       
    )


};

export default Home;