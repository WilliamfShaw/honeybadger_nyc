import React, { Component } from 'react';

class NewCardInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        fetch('/cards', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }).then(() => {
            this.setState({
                task: ''
            });
            this.props.getCards();
        });
    }

    handleInput(e) {
        this.setState({
            task: e.target.value
        });
    }

    render() {
        return (
            <div id="new-card">
                <input id="new-card-text" type="text" placeholder="What do you need to do?" value={this.state.task} onChange={this.handleInput}/>
                <button id="new-card-button" onClick={this.handleSubmit}>Add Card</button>
            </div>
        )
    }
}

export default NewCardInput;
