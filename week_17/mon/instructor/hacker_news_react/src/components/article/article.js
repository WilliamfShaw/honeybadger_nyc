import React, { Component } from 'react';
import ArticleView from './article_view';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            modalOpen: false
        };

        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({
            modalOpen: true
        });
    }

    componentDidMount() {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.articleId}.json?print=pretty`)
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        data
                    });
                });
            });
    }

    render() {
        return (
            <ArticleView
                title={this.state.data.title}
                author={this.state.data.by}
                openModal={this.openModal}
            />
        )
    }
}

export default Article;
