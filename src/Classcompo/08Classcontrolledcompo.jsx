import React, { Component } from "react";

class Classcontrolledcompo extends Component {

    constructor(){
        super()
        this.state ={
            name :"",
            age : "",
            phone :"",
        }
    }
   
    login = (event) =>{
        // return false
        // console.log(this.inputref.current.value);
        console.log(this.state.name);
        event.preventDefault()
    }
    render() { 
        return (

            <>
            <form onSubmit={(event) =>this.login(event)}>
            <input type="text" onChange={(event)=> this.setState({name : event.target.value})} />
            <input type="submit" value="login"/>
            </form>
            </>
        );
    }
}
 
export default Classcontrolledcompo;
