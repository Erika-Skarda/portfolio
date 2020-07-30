import React, { Component, Fragment} from "react";
import { WrapperHome,
         Profile,
         Photo} from "./styled";
import { Foto } from "../../img/foto.jpg"
import Header from "../../Components/Header/Header"

const Home = () => {

    return(
        <WrapperHome> 
            <Header />
            <Profile>
                
                <Photo src={require("../../img/foto.jpg")}></Photo>

            </Profile>

        </WrapperHome>

       
    )


};

export default Home;