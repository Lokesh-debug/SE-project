import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class login extends Component {
    state = {
        loggedIn: true
    }
    
    render(){
        if (this.state.loggedIn) {
            return <Redirect to="/" />;
        }
        console.log(this.state);
        return(
        <div>
            <p>Welcome </p>
        </div>
    
        );
    }
    }
export default login;