import React, {useState} from 'react';
import Field from '../Field'
import Timer from '../Timer'
import "./index.css";

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function generateRandomData(count, min, max) {
  return Array(count).fill(1).map((_, i) => {
    const sign = Math.random() > 0.5 ? '+' : '-'

    let firstValue
    let secondValue

    firstValue = randomInteger(min, max)
    secondValue = randomInteger(min, max)

    if(sign === '+') {
      while(firstValue + secondValue > max) {
        firstValue = randomInteger(min, max)
        secondValue = randomInteger(min, max)
      }

      return {
        sign,
        val1: firstValue,
        val2: secondValue,
        key: Math.random(),
        index: i
      }
    }

    return {
      sign,
      val1: firstValue > secondValue ? firstValue : secondValue,
      val2: firstValue > secondValue ? secondValue : firstValue,
      key: Math.random(),
      index: i
    }
  })
}

const congratulationText = [
  'Поздравляю Алина!!! Ты большая умничка! 🎉 Ни одной ошибки :)',
  'Урааа!!! Все правильно! 😄 Научишь меня?',
  'Ты такая молодец! Легко справилась со всеми задачками, давай повторим'
]

const data = generateRandomData(15, 1, 19)

let right = 0
let wrong = 0

export default function Form({count, min, max}) {
  const [data, setData] = useState(generateRandomData(count, min, max))
  const [rightAnswers, setRightAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [filledFields, setFilledFields] = useState({})

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

  const onFillField = (value, index) => {
    setFilledFields({...filledFields, [index]: value})
  }

  const canSubmit = Object.values(filledFields).filter(Boolean).length === count

  return (
    <div className="form">
      {data.map(item => (
        <Field
          {...item}
          showAnswer={showAnswer}
          onGetResult={onGetResult}
          checkAnswers={false}
          key={item.key}
          onFillField={onFillField}
        />
      ))}

      <Timer stop={showAnswer} />
      {showAnswer ? (
        <div>
          <br/>
          <div>Правильные ответы: <span className={'rightText'}>{rightAnswers}</span></div>
          {Number(wrongAnswers)? <div>Неправильные ответы: <span className={'wrongText'}>{wrongAnswers}</span></div> : null}
          {!(Number(wrongAnswers)) ? <div>{congratulationText[randomInteger(0,2)]}</div> : null}
        </div>
      ) : <button className={'submit_btn' + (canSubmit ? ' start_btn' : ' disabled_btn')} disabled={!canSubmit} onClick={onPress}>Готово!</button>}
    </div>
  );
}
