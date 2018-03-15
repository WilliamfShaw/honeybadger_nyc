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
    }

    handleCardDelete() {
        console.log('CARD BEING DELETED');
    }

    handleCardFinish() {
        console.log('CARD FINISHED');
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
        console.log('RENDERING');
        return (
            <div>
                <h1>Trillo</h1>
                <p><i>A honeybadger project</i></p>
                <NewCardInput />
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
