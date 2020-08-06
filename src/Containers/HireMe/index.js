import React, { Fragment } from "react"

import { HireMeWrapper, 
        
         Text, 
         SocialWrapper, 
         SocialIcon, 
         Email } from "./styled"

function HireMe() {

    return (
        <Fragment>
            <HireMeWrapper id="hireme">
                <h2>Contate-me!</h2>
                <p>
                    Procuro oportunidade de trabalho onde eu possa 
                    aprender, me desenvolver e 
                    evoluir na minha carreira profissional.
                </p>
                <p>
                    Email para contato: 
                        <Email onClick={() => window.open('mailto:contato@erikaskarda', '_self')}> erikaskarda@yahoo.com.br</Email><br />
                    Celular: <b>(11) 94484-6258</b>
                </p>
                <SocialWrapper>
                      
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
                

                </SocialWrapper>
            </HireMeWrapper>
        </Fragment>
    )
}

export default HireMe