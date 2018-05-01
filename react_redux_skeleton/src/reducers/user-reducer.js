import {
    fetchUserType,
    userCreatedType,
    userCreationError
} from '../actions/user-actions';

const initialState = {
    user: {
        id: null,
        email: null
    },
    fetching: false,
    fetched: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case fetchUserType:
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        case userCreatedType:
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        default:
            return state;
    }
}
