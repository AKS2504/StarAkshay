import React, { Component } from "react";
import Updatecompo from "./Mainhoc";
import { render } from "@testing-library/react";

class Clickcounter extends Component{
    constructor(){
        super()
        this.state ={
            count :0
        }
    }
    increment = () =>{
        this.setstate({
            count : this.state.count + 1
        })
    }
    render() {
        const {count} =this.state
        return (
            <>
            <h1>Clickcounter</h1>
            <p>{this.props.name}</p>
            <button onClick={() => this.increment()}>Clickcount{count}</button>
            </>
        )
    }   
}

