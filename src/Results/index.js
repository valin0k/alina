import React from 'react'
import {getPeriodData} from '../helpers'
import './index.css'

function getTime(time) {
  const mins = Math.floor(time / 60000)
  const sec = time - (mins * 60000)

  return mins + ' мин. ' + Math.floor(sec / 1000) + ' сек.'
}

export default () => {
  const data = getPeriodData(50) || []

  if(!data.length) {
    return (
      <div>Пока ничего нету, самое время решить несколько задачек!</div>
    )
  }
  return (
    <div className={'historyList'}>
      {data.map((item) => {
        const date = new Date(item.time)
        const month = date.getMonth()
        const day = date.getDate()
        const totalCount = item.wrongCount + item.rightCount

        if(!item.time) return null

        return (
          <div key={item.time} className={'historyItem'}>
            <div className={'historyDate'}>{item.date}</div>
            <div className={'grayText'}>Время занятий: <span className={'darkText'}>{getTime(item.time)}</span></div>
            <div className={'grayText'}>Правильные ответы: <span className={'rightText'}>{item.rightCount}</span></div>
            <div className={'grayText'}>Неправильные ответы: <span className={'wrongText'}>{item.wrongCount}</span></div>
            <div className={'progressLine'}>
              <div className={'progressRight'} style={{flex: item.rightCount / totalCount}}></div>
              <div className={'progressWrong'} style={{flex: item.wrongCount / totalCount}}></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
