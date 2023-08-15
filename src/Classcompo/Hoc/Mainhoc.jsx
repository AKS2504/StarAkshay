import React, { Component } from "react";

const Updatecompo = originalcompo =>{
    class Newcompo extends Component {
        state ={ }
        render(){
            return (
                <>
                <originalcompo/>

                </>
            );
        }
    }   
}
return Newcompo;

export default Updatecompo(Clickcounter);