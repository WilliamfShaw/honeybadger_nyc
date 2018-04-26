import axios from 'axios';

export const fetchTweetsType = 'FETCH_TWEETS';
export const fetchTweetsFulfilledType = 'FETCH_TWEETS_FULFILLED';
export const fetchTweetsRejectedType = 'FETCH_TWEETS_REJECTED';

export function fetchTweets() {
    return function(dispatch) {
        dispatch({ type: fetchTweetsType })

        axios.get('/tweets')
            .then((response) => {
                dispatch({type: fetchTweetsFulfilledType, payload: response.data });
            })
            .catch((err) => {
                dispatch({type: fetchTweetsRejectedType, payload: err});
            });
    }
}

//reducer for addTweet(id, text)
export const addTweetType = 'ADD_TWEET';

export function addTweet(id, text) {
    return {
        type: addTweetType,
        payload: {
            id,
            text
        }
    }
}

//reducer for updateTweet(id, text)
export const updateTweetType = 'UPDATE_TWEET';

export function updateTweet(id, text) {
    return {
        type: updateTweetType,
        payload : {
            id,
            text
        }
    }
}

//reducer for deleteTweet(id)
export const deleteTweetType = 'DELETE_TWEET';

export function deleteTweet(id) {
    return {
        type: deleteTweetType,
        payload: id
    }
}
