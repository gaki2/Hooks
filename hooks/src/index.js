import React, {useEffect, useState, useReducer, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT' :
      return {value : state.value + 1};
    case 'DECREMENT' :
      return {value : state.value - 1};
    default :
    return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value : 0});

  return (
    <div>
      <p>
        현재 카운터 값은 {state.value}입니다.
      </p>
      <button onClick={() => dispatch({type : 'INCREMENT'})}>+1</button>
      <button onClick={() => dispatch({type : 'DECREMENT'})}>-1</button>
    </div>
  )
}


function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('root'));

