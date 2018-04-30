import axios from 'axios';

export const fetchUserType = 'FETCH_USER_FULFILLED';

export function fetchUser() {
    return {
        type: fetchUserType,
        payload: {
            name: 'Will',
            age: 99
        }
    }
}

export const creatingUserType = 'CREATING_USER';
export const userCreatedType = 'USER_CREATED';
export const userCreationError = 'USER_CREATION_ERROR';

export function createUser(data) {
    return function(dispatch) {
        dispatch({ type: creatingUserType });

        axios.post('/users/signup', data)
            .then(function(response) {
                //dispatch success action
                dispatch({ type: userCreatedType, payload: response.data });
            })
            .catch(function(err) {
                // dispatch error action
                dispatch({ type: userCreationError, payload: err });
            });
    }
}

export const setUserNameType = 'SET_USER_NAME';

export function setUserName(name) {
    return {
        type: setUserNameType,
        payload: name
    }
}

export const setUserAgeType = 'SET_USER_AGE';

export function setUserAge(age) {
    return {
        type: setUserAgeType,
        payload: age
    }
}
