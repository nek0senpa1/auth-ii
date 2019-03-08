import React, {Component} from 'react';

import axios from 'axios';

class Users extends Component {

    state ={
        userlist: []
    }

    componentDidMount() {
        axios
        .get('http://localhost:5500/api/users')
        .then(res => {
            this.setState ({
                userlist: res.data
            })
        })
        .catch(err =>{
            console.log('Something is WRONG, here is stuff:', err);
        })
    }

    render() {
        return(
            <div>
                <h2>Here's Your User Friends</h2>
                <div>
                    {this.state.userlist.map( stuff => {
                        return <h4>{stuff}</h4>
                    })}
                </div>
            </div>
        )
    }

}

export default Users;