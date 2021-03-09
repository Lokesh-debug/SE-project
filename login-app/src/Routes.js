import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from './App' ;
import Login from './login';
import Form from './form';
import History from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/form" component={Form} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        )
    }
}
