import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/user-actions';
import * as tweetActions from '../actions/tweets-actions';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.fetchTweets = this.fetchTweets.bind(this);
    }

    componentWillMount() {
        this.props.userActions.fetchUser();
        this.fetchTweets();
    }

    fetchTweets() {
        this.props.tweetsActions.fetchTweets();
    }

    updateUserName() {
        this.props.userActions.setUserName('John');
    }

    render() {
        const { user, tweets } = this.props;

        const mappedTweets = tweets.map(tweet => {
            return (
                <li key={tweet.id}>
                    <span>{tweet.content}</span>
                    <br/>
                    <span>{tweet.author}</span>
                </li>
            )
        });

        return (
            <div>
                <ul>{mappedTweets}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.user,
        userFetched: state.user.fetched,
        tweets: state.tweets.tweets
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        tweetsActions: bindActionCreators(tweetActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
