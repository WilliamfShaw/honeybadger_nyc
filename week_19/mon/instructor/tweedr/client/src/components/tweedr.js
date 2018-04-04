import React, { Component } from 'react';
import NewTweedForm from './new-tweed-form';
import TweedView from './tweed-view';

class Tweedr extends Component {
    constructor(props){
        super(props);

        this.state = {
            tweeds: []
        }

        this.createNewTweed = this.createNewTweed.bind(this);
        this.deleteTweed = this.deleteTweed.bind(this);
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

    async deleteTweed(e) {
        const tweedId = e.target.id;

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
                { this.state.tweeds.reverse().map((tweed) => {
                    const { content, author, id } = tweed;

                    return (
                        <TweedView
                            key={id}
                            content={content}
                            author={author}
                            deleteTweed={this.deleteTweed}
                            id={id}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Tweedr;
