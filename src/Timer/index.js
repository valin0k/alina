import React, {useEffect, useState} from 'react'

function getTime(time) {
  const mins = Math.floor(time / 60000)
  const sec = time - (mins * 60000)

  return 'Ты справилась за: ' + mins + ' мин. ' + Math.floor(sec / 1000) + ' сек.'
}

export default ({stop, onStop}) => {
  const [startTimer, setStartTimer] = useState(Date.now())
  const [endTimer, setEndTimer] = useState(0)

  useEffect(() => {
    if(stop) {
      stop && setEndTimer(Date.now)
      onStop(endTimer - startTimer)
    }
  }, [stop])

  return (
    <div>
      {endTimer && stop ? getTime(endTimer - startTimer) : null}
    </div>
  )
}
