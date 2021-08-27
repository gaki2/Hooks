import React, {useEffect, useState, useReducer, useMemo} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const getAverage = numbers => {
  console.log('평균값 계산중 ...');
  console.log(numbers);
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return (sum / numbers.length);
}



function Average() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const changeNumber = (e) => {
      setNumber(e.target.value);
  }

  const onSubmit = (e) => {
    let input;
    if (!Number.isNaN(Number(number))) {
      input = Number(number);
      setList([...list, input]);
    }
  }

  const avg = useMemo(() => getAverage(list),[list]);

  return(
    <div>
      <p><input onChange={changeNumber} placeholder='값을 입력하세요.'></input><button type='submit' onClick={onSubmit}>제출</button></p>
      <h1>{avg}</h1>
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

