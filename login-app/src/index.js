import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "./Style.css";

import 'bootstrap/dist/css/bootstrap.css';
import Routes from "./Routes";

 
ReactDOM.render(
  <Router>
    
    <Routes />
  </Router>,
  document.getElementById("root")
);
