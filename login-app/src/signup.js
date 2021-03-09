import React, { Component } from 'react';
import './Style.css';
import { Button, Form , FormGroup , Label , Input} from 'reactstrap';
import history from './history';


export default class Signup extends Component {
  
    render() {
      return (
      <Form className='signup-form'>
        
        <h2 className="text-center">sign,up Please!</h2>
        <FormGroup>
           <Label>Name</Label>
            <Input className= "fill" type="name" placeholder="Enter the name"/>
        </FormGroup>
        <FormGroup>
           <Label>Email</Label>
            <Input className= "fill" type="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
           <Label>Password</Label>
            <Input className= "fill" type="password" placeholder="Password"/>
        </FormGroup>
        <Label>gender : </Label> 
        <select  defaultValue="Select Gender">
                        <option defaulValue>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">female</option>
        
        </select><br />
        <Button className="btn-lg btn-dark btn-block " onClick={() => history.push('/form')} >sign up</Button>
        
          
        
      </Form>
  
      ); 
      
      
  }
  }

  
  
  