import React from 'react';
import axios from 'axios';

import {Component} from 'react';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    render() {
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='username' />
                    <p>Username</p>
                        <input 
                        name= "username"
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
                        
                    
                    <button type ='submit'>Login</button>
                </form>
            </div>
        )

    }

handleInput = e => {
    const {name,value} = e.target;

    this.setState({
        [name]: value
    })
}

handleSubmit = e => {
    e.preventDefault()

    const endpoint= 'http://localhost:5500/api/login';

    axios
    .post(endpoint, this.state)
    .then(res => {
        console.log(res);
        localStorage.setItem('jwt', res.data.tolkien);

    })
    .catch(err => {
        console.log(err);
        })
    }
}