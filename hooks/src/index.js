import React, {useEffect, useState, useReducer, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function getAverage(list) {
  if (list.length === 0) {
    return 0;
  }
  let sum = 0;
  for(let i = 0; i < list.length; i++) {
    sum += Number(list[i]);
  }
  return sum/list.length;
}

function Average() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const onChange = (e) => {
      setInput(e.target.value);
  }

  const onClick = () => {
    if (Number.isNaN(Number(input))) {
      alert('인풋값은 숫자로 입력해야합니다.');
    } else {
    setList([...list, input]);
    setInput('');
    }
  }

  return(
    <div>
      <input onChange={onChange} value={input}></input>
      <button onClick={onClick}>입력</button>
      <h1>{getAverage(list)}</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Average></Average>
    </div>
  )
}
ReactDOM.render(<App />,document.getElementById('root'));

