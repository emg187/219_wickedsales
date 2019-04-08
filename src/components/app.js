import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import '../assets/css/app.scss';
import React from 'react';
import {Route} from "react-router-dom";
import ProductRoutes from "./products"; //without specified file, it grabs index
import Home from "./home";
import Nav from "./nav";
import Test from "./test";

const App = () => (
    <div>
        <Nav/>
    <div className="container">
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={ProductRoutes}/>
        <Route path="/test" component={Test}/>
    </div>
    </div>
);

export default App;




