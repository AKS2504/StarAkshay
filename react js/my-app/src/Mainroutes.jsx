import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Header from "./com-comp/Header";
import Example from "./Example";

const Classcomporoutes = React.lazy(() => import("./Classcompo/Classcomporoutes"))


const Mainroutes = createBrowserRouter([
    {
        path :"/",
        element : <><Header/><Home/></>
    },
    {
        path :"/about",
        element:<><Header/><About/></>
    },
    {
        path :"/product",
        element: <><Header/><Product/></>
    },
    {
        path :"/Example",
        element: <><Header/><Example/></>,
        children:[
            { 
                path: "Classcompo/*",
                element : <Suspense fallback={<h2> Loading...</h2>}> <Classcomporoutes/></Suspense>
            }
        ]
    }
])
export default Mainroutes