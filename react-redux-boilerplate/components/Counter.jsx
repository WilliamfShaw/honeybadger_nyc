// Create components/Counter.jsx
import React, { Component } from 'react';

const Counter = ({ value, onIncrement, onDecrement, onClear, addFive }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}> clear </button>
    <button onClick={addFive}> add 5 </button>
  </div>
);

export default Counter;
