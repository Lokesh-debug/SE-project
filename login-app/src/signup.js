import React, { Component } from "react";
import  './Style.css';

class form extends Component {
    constructor(props) {
        super(props)
         this.state= {
             name:" ",
             email:" ",
             password: " ",
             gender: " ",

         }
         this.handleSubmit= this.handleSubmit.bind(this)
    }
    namehandler =(event) => {
        this.getstate({
            name:event.target.value
        })
    }
    emailhandler =(event) => {
        this.getstate({
            email:event.target.value
        })
    }
    passwordhandler =(event) => {
        this.getstate({
            password:event.target.value
        })
    }
    genderhandler =(event) => {
        this.getstate({
            gender:event.target.value
        })
    }
    handleSubmit= (event) => {
        alert('${this.start.name) Registered successfully !!')
        console.log(this.state);
        this.getstate({
            name: "",
            email: "",
            password: "",   
            gender: ""
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>User sign-up</h1>
                    <label>name :</label> <input type="text" value={this.state.name} onChange={this.namehandler} placeholde="name.."></input> <br />
                    <label>email :</label> <input type="text" value={this.state.email} onChange={this.emailhandler} placeholder="email.."></input> <br />
                    <label>password :</label> <input type="text" value={this.state.password} onChange={this.passwordhandler} placeholder="password.."></input> <br />
                    <label>gender :</label> <select  onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaulValue>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default signup;  