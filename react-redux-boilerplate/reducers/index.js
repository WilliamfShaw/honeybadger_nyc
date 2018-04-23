// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR } from '../actions';

export default (state = { counter: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        counter: state.counter + action.value
      });
    case DECREMENT:
      return Object.assign({}, state, {
        counter: state.counter - action.value
      });
    case CLEAR:
      return Object.assign({}, state, {
        counter: 0
      });
    default:
      return state;
  }
};
