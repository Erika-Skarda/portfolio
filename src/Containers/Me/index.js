import React, { Component, Fragment} from "react";
import { WrapperAboutMe } from "./styled";

const Me = () => {

    return(

       <WrapperAboutMe>

        <img src={require("../../img/foto.jpg")}></img>

       </WrapperAboutMe>
       
    )


};

export default Me;