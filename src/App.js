import React, {useState, useEffect} from 'react';
import Field from './Field'
import Timer from './Timer'
import Form from './Form'
import Results from './Results'
import './App.css';

function App() {
  const [roundsCount, setRoundsCount] = useState('')
  const [start, setStart] = useState(false)
  const [reset, setReset] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const onStartPress = () => setStart(true)

  const onReset = () => setReset(true)

  const onChange = ({target: {value}}) => {
    if(!isNaN(value)) {
      setRoundsCount(value.trim())
    }
  }

  const onShowHistory = () => {
    setShowHistory(true)
  }

  const onHideHistory = () => {
    setShowHistory(false)
  }

  useEffect(() => {
    reset && setReset(false)
  }, [reset])

  if(reset) return (
    <div className="App">
      <div className={'container'}>
      </div>
    </div>
  )

  if(showHistory) {
    return (
      <div className={'App'}>
        <div className={'container form'}>
          <button className={'submit_btn start_btn'} onClick={onHideHistory}>Назад</button>
          <Results></Results>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      {start ? (
        <div className={'container'}>
          <Form count={Number(roundsCount) || 8} min={1} max={19} />
          <button className={'submit_btn reset_btn'} onClick={onReset}>Заново</button>
        </div>
      ) : (
        <div className={'greeting'}>
          <h2 className={'alina'}>Привет, Алина!</h2>
          <div className={'fieldItem'}>
            <div className={'label'}>Сколько примеров будем решать?</div>
            <input placeholder={'Как насчет 8?'} className={'roundInput'} onChange={onChange} value={roundsCount}/>
          </div>
          <button className={'submit_btn start_btn'} onClick={onStartPress}>Начать</button>
          <button className={'submit_btn start_btn'} onClick={onShowHistory}>Мои занятия</button>
        </div>
      )}
    </div>
  );
}

export default App;
