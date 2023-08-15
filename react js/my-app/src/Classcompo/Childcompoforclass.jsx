import React, { Component } from "react";

class Childcompoforclass extends Component{

render() {
    return (
        <>
        <h1>child compo</h1>
        <h1>{this.props.data}</h1>
        <h1>{this.props.email}</h1>

        </>
    );
}
}
export default Childcompoforclass;