import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../app.css";
import Header from '../header';
// import "./Accountusers.css";


function Accountusers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/admin/users/manage")
        .then(users => { 
            setUsers(users.data);
            console.log(users.status, users.data);
        })
        .catch(err => console.log(err));
    }, []);
    

    return (
        <div className="Accountusers">
            <Header />

            <main>
                <h1 className="page-title">ACCOUNT USERS</h1>
                
                <table className='table display-flex justify-content-center align-items-center'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">FIRST NAME</th>
                            <th scope="col">LAST NAME</th>
                            <th scope="col">E-MAIL</th>
                            <th scope="col">PASSWORD</th>
                            <th scope="col">ACTIVE</th>
                            <th scope="col">ROLE</th>
                            <th scope="col">PERMISSIONS</th>
                            <th scope="col">CREATED AT</th>
                            <th scope="col">UPDATED AT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                return (
                                    <tr>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.username}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.isActive}</td>
                                        <td>{user.role}</td>
                                        <td>{user.permission}</td>
                                        <td>{user.createdAt}</td>
                                        <td>{user.updatedAt}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Accountusers;