import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";


class Classmenu extends Component{
render(){
    return(
        <>
        {/* <div className="row"> */}
            {/* <div className="col-3"> */}
            <ul>
            <li><Link to="Classcompointro">Classcompointro</Link></li>
            <li><Link to="Classcompojsx">Classcompojsx</Link></li>
            <li><Link to="Classcompoprops">Classcompoprops</Link></li>
            <li><Link to="Classcompostate">Classcompostate</Link></li>
            <li><Link to="Statelifecycle">Statelifecycle</Link></li>
            <li><Link to="Statelifecycle">Statelifecycle</Link></li>
            <li><Link to="Classrendering">Classrendering</Link></li>
            <li><Link to="Classuncontrolledcompo">Classuncontrolledcompo</Link></li>
            <li><Link to="Classcontrolledcompo">Classcontrolledcompo</Link></li>
            <li><Link to="Classlistandkey">Classlistandkey</Link></li>
            <li><Link to="Userlaypoteffect">Userlaypoteffect</Link></li>

            


            




        </ul>
            {/* </div> */}
            
        {/* </div> */}

        <Outlet></Outlet>
       
        </>
    
    )

}
}

export default Classmenu