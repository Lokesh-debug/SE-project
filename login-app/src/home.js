import React, { Component } from 'react';
import './Style.css';
class Home extends Component {
    state = {
        loggedIn: true
    }
    logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    
    render(){
        
            return (
       
             <div className="log">
           
             <button className="btn-lg btn-dark btn-block" onClick={this.logout}>Logout</button>
             </div>
            
    
        );
    }
}
export default Home;