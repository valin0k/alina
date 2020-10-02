import React, {useState} from 'react';
import Field from '../Field'
import Timer from '../Timer'
import "./index.css";

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function generateRandomData(count, min, max) {
  return Array(count).fill(1).map((_) => {
    const sign = Math.random() > 0.5 ? '+' : '-'
    let firstValue = randomInteger(min, max)
    let secondValue = randomInteger(min, max)

    return {
      sign,
      val1: firstValue > secondValue ? firstValue : secondValue,
      val2: firstValue > secondValue ? secondValue : firstValue
    }
  })
}

const data = generateRandomData(15, 1, 19)

let right = 0
let wrong = 0

export default function Form({count, min, max}) {
  const [data, setData] = useState(generateRandomData(count, min, max))
  const [rightAnswers, setRightAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const onPress = () => setShowAnswer(true)

  const onGetResult = (result) => {
    if (result) {
      ++right
      setRightAnswers(right)
    } else {
      ++wrong
      setWrongAnswers(wrong)
    }
  }

  return (
    <div className="form">
      {data.map(item => (
        <Field {...item} showAnswer={showAnswer} onGetResult={onGetResult} />
      ))}

      <Timer stop={showAnswer} />
      {showAnswer ? (
        <div>
          <br/>
          <div>Правильные ответы: {rightAnswers}</div>
          <div>Неправильные ответы: {wrongAnswers}</div>
        </div>
      ) : null}

      <button className={'submit_btn'} disabled={showAnswer} onClick={onPress}>Готово!</button>
    </div>
  );
}
