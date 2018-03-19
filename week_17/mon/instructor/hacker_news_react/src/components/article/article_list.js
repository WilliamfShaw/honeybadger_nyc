import React, { Component } from 'react';

class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
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
            <h1>ARTICLE LIST</h1>
        );
    }
}

export default ArticleList;
