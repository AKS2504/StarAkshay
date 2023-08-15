import React, { Component } from "react";
class Classlistandkey extends Component {

    constructor(){
        super()
        this.state ={
            items :[1,2,3,4,5,6]
        }
    }

    add (){
        console.log("add");
        this.setState(
            {
            items :[1,2,3,4,5,6,7]

            }
        )
    }
    
    
    render() { 
        // const items =[1,2,3,4,5,6]
        const Listitems =this.state.items.map((item)=> <li key={item.toString()}>{item}</li>)

        return (
            <>
            <h1>Classlistandkey</h1>

            <ul>
                {Listitems}
            </ul>
            <button onClick={()=>this.add()}>Add</button>
            {/* <h2>{items}</h2> */}
            {/* <ul>
        
            <li>{items[0]}</li>
            <li>{items[1]}</li>
            <li>{items[2]}</li>
            <li>{items[3]}</li>
            <li>{items[4]}</li>
            <li>{items[5]}</li>



            </ul> */}

         
                <br />
                <br />
                <br />
                <br /> 
                <br />

             
            </>
        );
    }
}
 
export default Classlistandkey;