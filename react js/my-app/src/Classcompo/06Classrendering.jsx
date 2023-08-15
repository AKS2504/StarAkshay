import React, { Component } from "react";


class Classrendering extends Component {
    constructor(){
        super()
        this.state ={
            islogin : true
        }
    } 
    
    render() { 

        let msg

        if (this.state.islogin){
            msg = <h1>welcome Akshay</h1>
        }
        else{
          msg = <h1>Welcome Guest</h1>
        }
        
        return msg

        // if (this.state.islogin){
        //     return <><div><h1>Welcome Akshay</h1></div> </>
        // }
        // else{
        //     return<h1>Welcome Guest</h1>
        // }
        // return (
        //     <>
        //     <h1> Welcome Akshay</h1>
        //     <h1> Welcome Guest</h1>


        //     </>
        // );
    }
}
 
export default Classrendering;