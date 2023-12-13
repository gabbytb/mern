import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './assets/img/mern.ico';




export default function Header() {

    return (
        <>
        <header className="App-header">
            <nav className='navbar navbar-expand'>

                <div className='navbar-nav mr-auto'>
                    <Link to={"/"} className="navbar-brand">
                    <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div  id="navbarSupportedContent" className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to={"/blog"} className="nav-link">Blog</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={"/user/signup"} className="nav-link">Sign up</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={"/user/login"} className="nav-link">Log in</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={"/admin/users/manage/"} className="nav-link">Account Users</NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
        </>
    )
}