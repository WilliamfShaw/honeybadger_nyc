/* global window, document */
/* eslint no-render-return-value: 0, jsx-filename-extension: 0 */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import { incrementCounter, decrementCounter, clearCounter } from './actions';

/* eslint-disable no-underscore-dangle */
const store = createStore(counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

const render = () => ReactDOM.render(
  <Counter
    value={store.getState().counter}
    onIncrement={() => store.dispatch(incrementCounter('incrementing counter'))}
    onDecrement={() => store.dispatch(decrementCounter('decrementing counter'))}
    onClear={() => store.dispatch(clearCounter('clearing counter'))}
    addFive={() => store.dispatch(incrementCounter('incrementing by 5', 5))}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
