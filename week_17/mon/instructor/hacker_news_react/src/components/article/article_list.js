import React, { Component } from 'react';
import Article from './article';

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
            <div>
                {
                    this.state.data.map((articleId) => {
                        return (
                            <Article
                                key={articleId}
                                articleId={articleId}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default ArticleList;
