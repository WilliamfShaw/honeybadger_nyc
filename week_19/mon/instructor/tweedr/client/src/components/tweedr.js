import React, { Component } from 'react';
import NewTweedForm from './new-tweed-form';

class Tweedr extends Component {
    constructor(props){
        super(props);

        this.state = {
            tweeds: []
        }

        this.createNewTweed = this.createNewTweed.bind(this);
    }

    async getAllTweeds() {
        // fetch('/tweeds').then((response) => {
        //     response.json().then((data) => {
        //         this.setState({
        //             tweeds: data
        //         });
        //     });
        // });

        const response = await fetch('/tweeds');
        const data = await response.json();

        this.setState({
            tweeds: data
        });
    }

    async createNewTweed(tweedBody) {
        console.log(tweedBody)
        await fetch('/tweeds', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tweedBody)
        });

        this.getAllTweeds();
    }

    async deleteTweed(tweedId) {
        await fetch(`/tweeds/${tweedId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        this.getAllTweeds();
    }

    componentDidMount() {
        this.getAllTweeds();
    }

    render() {
        return (
            <div>
                <NewTweedForm
                    createNewTweed={this.createNewTweed}
                />
            </div>
        )
    }
}

export default Tweedr;
