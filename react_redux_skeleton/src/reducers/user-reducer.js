import { fetchUserType, setUserAgeType, setUserNameType } from '../actions/user-actions';

const initialState = {
    user: {
        id: null,
        name: null,
        age: null
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
        case setUserAgeType:
            return {
                ...state,
                user: {
                    ...state.user,
                    age: action.payload
                }
            }
        case setUserNameType:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload
                }
            }
        default:
            return state;
    }
}
