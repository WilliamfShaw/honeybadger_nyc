import { fetchTweetsFulfilledType } from '../actions/tweets-actions';

const initialState = {
    tweets: [],
    fetching: false,
    fetch: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case fetchTweetsFulfilledType:
            return {
                ...state,
                tweets: action.payload
            }
        default:
            return state;
    }
}
