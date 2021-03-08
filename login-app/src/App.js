import React, { Component } from 'react';
import './Style.css';
import { Button, Form , FormGroup , Label , Input } from 'reactstrap';
import  './signup';
import history from './history';
import './login';


 class App extends Component {
  
  render() {
    return (
    <Form className='login-form'>
      <h1>
        <span className="font-weight-bold">mywebsite</span>.com
      </h1>
      <h2 className="text-center">Login Please</h2>
      <FormGroup>
         <Label>Email</Label>
          <Input type="email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
         <Label>Password</Label>
          <Input type="password" placeholder="Password"/>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block" onClick={() => history.push('/login')}>Log in</Button>
      <div className="text-center pt-3">Or continue with Google account</div>
      
      <div className="text-center">
        <a href="/Sign-up" onClick={() => history.push('/signup')}>Sign-up</a>
        <span className="p-2">|</span>
        <a href="/forgot-password">Forgot Password</a>
      </div>
    </Form>

    ); 
    
    
}
}



export default App;