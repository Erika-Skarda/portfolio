import React,{ Fragment } from "react";
import { WrapperTech,
        Container,
        FrontendContainer,
        BackendContainer,
        Title,
        SubTitle
 } from "./styled";

const Tech = () => {


    return (

        <Fragment>
            <Container>
                <WrapperTech>
                    <FrontendContainer>
                        <Title>Front-end</Title>
                        <SubTitle>
                            Desenvolvimento de aplicações
                            web utilizando HTML, CSS e
                            JavaScript.<br/><br/>

                            Criação de sites responsivos
                            seguindo princípio de
                            Mobile First.
                        </SubTitle>
                    </FrontendContainer>

                    <BackendContainer>
                        <Title>Back-end</Title>
                        <SubTitle>
                            Aplicações utilizando NodeJS,
                            Typescript e MySQL.<br/><br/>

                            Criação de API´s para
                            comunicação com front-end
                            seguindo princípio de Clean Code.
                        </SubTitle>
                    </BackendContainer>
                </WrapperTech>
            </Container>
        </Fragment>



    )
};

export default Tech;