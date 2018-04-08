import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout';

render(
    <Router>
        <Layout />
    </Router>,
    document.getElementById('root')
);
