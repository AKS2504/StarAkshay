import React, { Component } from "react";
import { Routes,Route } from "react-router-dom";
import Classmenu from "./Classmenu";
import Classcompointro from "./01Classcompointro";
import Classcompojsx from "./02Classcompojsx";
import Classcompoprops from "./03Classcompoprops";
import Classcompostate from "./04Classcompostate";
import Statelifecycle from "./05Statelifecycle";
import Classrendering from "./06Classrendering";
import Classuncontrolledcompo from "./07 Classuncontrolledcompo";
import Classcontrolledcompo from "./08Classcontrolledcompo";
import Classlistandkey from "./09Classlistandkey";

class Classcomporoutes extends Component{
    render(){
        return(
            <Routes>
                <Route path="/"  element= {<Classmenu/>}>
                 <Route path="Classcompointro" element={<Classcompointro/>}/>
                 <Route path="Classcompojsx" element={<Classcompojsx/>}/>
                 <Route path="Classcompoprops" element={<Classcompoprops/>}/>
                 <Route path="Classcompostate" element={<Classcompostate/>}/>
                 <Route path="Statelifecycle" element={<Statelifecycle/>}/>
                 <Route path="Classrendering" element={<Classrendering/>}/>
                 <Route path="Classuncontrolledcompo" element={<Classuncontrolledcompo/>}/>
                 <Route path="Classcontrolledcompo" element={<Classcontrolledcompo/>}/>
                 <Route path="Classlistandkey" element={<Classlistandkey/>}/>










                </Route>
            </Routes>
        )
    }
}
export default Classcomporoutes;