import React, {useState, useEffect} from "react";
import "./index.css";

function getResult(val1, val2, sign) {
  return sign === '+' ? val1 + val2 : val1 - val2
}

export default function ({ val1, val2, sign, showAnswer, onGetResult }) {
  const [value, setValue] = useState('')

  const onChange = (value) => {
    const num = value.target.value
    if(!isNaN(num)) {
      setValue(num.trim())
    }
  }

  useEffect(() => {
    showAnswer && onGetResult(value && getResult(val1, val2, sign) === Number(value))
  }, [showAnswer])

  const isRight = showAnswer && value && getResult(val1, val2, sign) === Number(value)

  return (
    <div className="wrapper">
      <div className="values">
        <div className={'val'}>{val1}</div>
        <div className={sign === '+' ? 'plus_sign' : 'minus_sign'}>{sign}</div>
        <div className={'val'}>{val2}</div>
        <div className={'equal_sign'}>=</div>
      </div>


      {showAnswer && value ? (
        <>
          <div className={'yourAnswer'}>
            {value}
            <span className={'rightAnswer'}>{!isRight ? ' (' + getResult(val1, val2, sign) + ') ' : null}</span>
          </div>
          <div className={'answer ' + (isRight ? 'answerTrue' : 'answerFalse')}>
            {isRight ? '✓' : '✖️'}
          </div>
        </>
      ) : <input maxLength={2} value={value} className="input" disabled={showAnswer} onChange={onChange} />}
    </div>
  );
}
