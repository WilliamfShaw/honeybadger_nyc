import React, { Component } from 'react';
import NewCardInput from './new-card-input';
import CardColumn from './card-column';

class Trillo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Trillo</h1>
                <p><i>A honeybadger project</i></p>
                <NewCardInput />
                <CardColumn
                    heading={'todo'}
                />
                <CardColumn
                    heading={'done'}
                />
            </div>
        )
    }
};

export default Trillo;
