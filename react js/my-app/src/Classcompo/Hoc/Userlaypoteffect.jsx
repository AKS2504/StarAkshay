import React, { useEffect, useState } from 'react';

const Userlaypoteffect = () => {
const[count, setCount]=useState(0)
const[del, setDel]=useState(0)

    useEffect(()=>{
        console.log("Useeffect");
    })


    return ( 
        <>
        <p>{count}</p>
        <button onClick={()=> setCount(count + 1)}>Add</button>
        <p>{del}</p>
        <button onClick={()=> setDel(del - 1)}>del</button>
        </>
     );
}
 
export default Userlaypoteffect;