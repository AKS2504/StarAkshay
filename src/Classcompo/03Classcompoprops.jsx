import React, { Component } from "react";
import Childcompoforclass from "./Childcompoforclass";
// import Classcompointro from "./Classcompointro";

class Classcompoprops extends Component{

    render() {
        return (
            <>
            <h1>child</h1>
            <Childcompoforclass data= "Akshay" email="akkipatel6036@gmail.com"/>
            {/* <Classcompointro data="dhrumil"/> */}
            </>
        );
    }
}
export default Classcompoprops;