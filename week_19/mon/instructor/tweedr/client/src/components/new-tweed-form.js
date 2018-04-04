import React, { Component } from 'react';

class NewTweedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            author: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const stateKey = e.target.name;

        this.setState({
            [stateKey]: e.target.value
        });
    }

    handleSubmit() {
        this.props.createNewTweed(this.state);
    }

    render() {
        return (
            <div id="new-tweed-form">
                <input type="text" name="content" placeholder="What's on your mind?" value={this.state.content} onChange={this.handleInput}/><br/>
                <input type="text" name="author" placeholder="Who are you?" value={this.state.author} onChange={this.handleInput} /><br/>
                <button id="submit" onClick={this.handleSubmit}>Tweed It</button>
            </div>
        )
    }
}

export default NewTweedForm;
