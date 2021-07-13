import React, { Component } from 'react';
import {nanoid} from "nanoid"
import { getUsers } from '../APIs/userAPIs';

export default class User extends Component {

    state = {
        users: [],
    }

    componentDidMount () {
        getUsers().then(data => this.setState({users:data}))
    }


    render() {
        const {users} = this.state

        return (
            <div className="mycontainer"> 
                <h2 style={{textAlign: 'center'}}>All Users</h2>
                <h5 style={{textAlign: 'center'}}>Users and their age</h5>

                {
                    <table className="table" >
                    <thead>
                        <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={nanoid()}>
                                    <td>{user.username}</td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })}
    
                    </tbody>
                </table>
                }

            </div>
        )
    }
}
