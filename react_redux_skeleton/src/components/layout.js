import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import Signup from './user_credentials/signup';
import Login from './user_credentials/login';

const Layout = () => {
    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/signup'>Sign up</Link>
                <Link to='/login'>Log in</Link>
            </header>

            <main>
                <Route exact path='/' component={Home} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
            </main>
        </div>
    )
}

export default Layout;
