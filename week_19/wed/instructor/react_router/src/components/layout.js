import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home';
import Burrito from './burrito';

const Layout = () => {
    return (
        <div className='layout'>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/burritos'>Burritos</Link></li>
                        <li><Link to='/tacos'>Tacos</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/burritos' component={Burrito} />
                <Route path='/tacos' render={() => <div>TACOOS 4EVA</div>}/>
            </div>
        </div>
    );
}

export default Layout;
