import React from 'react';
import axios from 'axios';

import {Component} from 'react';

class Register extends Component {
    state = {
        username: '',
        password: '',
        department: '',
        
    }

    render() {
        return(
            <div>
                <h2>Register</h2>
                <form onSubmit={this.gogoNewUser}>
                    <label htmlFor='username' />
                    <p>Username</p>
                        <input 
                        name= "username"
                        temp="username"
                        id= "username"
                        value= {this.state.username}
                        type= 'text'
                        onChange={this.handleInput} ></input>
                    <br></br>
                    
                    <p>Password</p>
                    <label htmlFor="password" />
                        <input 
                        name= "password"
                        id= "password"
                        value= {this.state.password}
                        type= 'text'
                        onChange={this.handleInput} ></input>
                    <br></br>

                    <p>Department</p>
                    <label htmlFor="department" />
                        <input 
                        name= "department"
                        id= "department"
                        value= {this.state.department}
                        type= 'text'
                        onChange={this.handleInput} ></input>
                    <br></br>    <br></br>
                    
                    <button type ='submit'>Register</button>
                </form>
                <br></br>
                <div>
                
                </div>
            </div>
        )

    }

handleInput = e => {
    const {name,value} = e.target;
    this.setState({
        [name]: value
    })
}

gogoNewUser = e => {
    e.preventDefault()

    const endpoint= 'http://localhost:5500/api/register';

    axios
    .post(endpoint, this.state)
    .then(res => {
        console.log(res);
        this.setState={
            registered: true
        }

    })
    .catch(err => {
        console.log(console.err);
        this.setState={
            registered: true
        }

    })
    
    }

}

export default Register;