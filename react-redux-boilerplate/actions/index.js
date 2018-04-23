// actions/index.js
// Namespace actions
export const INCREMENT = 'counter/INCREMENT';

export function incrementCounter(text, value = 1) {
    return {
        type: INCREMENT,
        value,
        text
    }
}

export const DECREMENT = 'counter/DECREMENT';

export function decrementCounter(text, value = 1) {
    return {
        type: DECREMENT,
        value,
        text
    }
}

export const CLEAR = 'counter/CLEAR';

export function clearCounter(text) {
    return {
        type: CLEAR,
        text
    }
}
