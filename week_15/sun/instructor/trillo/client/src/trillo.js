import React, { Component } from 'react';
import NewCardInput from './new-card-input';
import CardColumn from './card-column';

class Trillo extends Component {
    constructor(props) {
        console.log('MAKING THINGS')
        super(props);
        this.state = {
            uncompletedCards: [],
            completedCards: []
        }

        this.handleCardDelete = this.handleCardDelete.bind(this);
        this.handleCardFinish = this.handleCardFinish.bind(this);
        this.getCards = this.getCards.bind(this);
    }

    handleCardDelete(e) {
        const id = e.target.parentNode.dataset.id;

        fetch(`/cards/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.getCards();
        })
    }

    handleCardFinish(e) {
        const id = e.target.parentNode.dataset.id;

        fetch(`/cards/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: { is_completed: true }
        }).then(() => {
            this.getCards();
        });
    }

    sortCardsByCompletion(array) {
        const completedCards = array.filter(card => card.is_completed);
        const uncompletedCards = array.filter(card => !card.is_completed);

        return {
            completedCards,
            uncompletedCards
        }
    }

    getCards() {
        fetch('/cards')
            .then((response) => {
                response.json().then((json) => {
                    const cards = this.sortCardsByCompletion(json);

                    this.setState({
                        completedCards: cards.completedCards,
                        uncompletedCards: cards.uncompletedCards
                    });
                })
            })
    }

    componentDidMount() {
        this.getCards();
    }

    render() {
        return (
            <div>
                <h1>Trillo</h1>
                <p><i>A honeybadger project</i></p>
                <NewCardInput
                    getCards={this.getCards}
                />
                <CardColumn
                    heading={'todo'}
                    handleCardDelete={this.handleCardDelete}
                    handleCardFinish={this.handleCardFinish}
                    cards={this.state.uncompletedCards}
                />
                <CardColumn
                    heading={'done'}
                    handleCardDelete={this.handleCardDelete}
                    handleCardFinish={this.handleCardFinish}
                    cards={this.state.completedCards}
                />
            </div>
        )
    }
};

export default Trillo;
