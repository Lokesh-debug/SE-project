import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./App";
import login from './login';
import register from "./signup";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/signup" component={register} />
                    <Route path="/login" component={login} />
                </Switch>
            </Router>
        )
    }
}
