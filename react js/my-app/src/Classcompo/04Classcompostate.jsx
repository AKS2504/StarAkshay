import React, { Component } from "react";

class Classcompostate extends Component{
    constructor(){
        super()
        this.state ={
            count : 0,
            name :"akshay"
        }
    }

    Icriment = ()=>{
        console.log("Incriment");
        this.setState({count :this.state.count + 5})
        this.setState({name :this.state.name = "akshay"})

    }
    Decrement = ()=>{
        console.log("Decrement");
        this.setState({count :this.state.count - 1})

    }

    render(){
        
        return(
            <>
            <h1>{this.state.count}</h1>
            <h1>{this.state.name}</h1>

            <button onClick={this.Icriment}>Icriment</button> 
            <button onClick={this.Decrement}>Decrement</button> 

            </>
        );
    }
}
export default Classcompostate;