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
        default:
            return state;
    }
}
