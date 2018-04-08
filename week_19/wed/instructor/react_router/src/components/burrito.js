import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

console.log(Redirect);

class Burrito extends Component {
    constructor(props) {
        super(props);
    }

    redirectTo() {
        <Redirect to='/tacos' />
    }

    render() {
        return (
            <h1>BURRITOS ARE SECOND BEST</h1>
        )
    }

    componentDidMount() {
        this.redirectTo()
    }
}

export default Burrito;
