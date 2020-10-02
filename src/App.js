import React, {useState} from 'react';
import Field from './Field'
import Timer from './Timer'
import Form from './Form'
import './App.css';

function App() {
  const [roundsCount, setRoundsCount] = useState('')
  const [start, setStart] = useState(false)


  const onStartPress = () => setStart(true)

  const onChange = ({target: {value}}) => {
    if(!isNaN(value)) {
      setRoundsCount(value.trim())
    }
  }

  return (
    <div className="App">
      {start ? (
        <Form count={Number(roundsCount) || 8} min={1} max={19} />
      ) : (
        <div className={'greeting'}>
          <h2>Привет, Алина!</h2>
          <div className={'fieldItem'}>
            <div className={'label'}>Сколько примеров будем решать?</div>
            <input className={'roundInput'} onChange={onChange} value={roundsCount}/>
          </div>
          <button className={'submit_btn'} onClick={onStartPress}>Начать</button>
        </div>
      )}
    </div>
  );
}

export default App;
