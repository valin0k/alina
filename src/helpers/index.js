export const getKey = (date = Date.now()) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth()
  const day = newDate.getDate()
  return `${year}/${month}/${day}}`
}

export const getTodayData = () => {
  const todayData = localStorage.getItem(getKey())

  if(todayData) {
    return JSON.parse(todayData)
  } else {
    return null
  }
}

export const addEntryToday = (rightCount, wrongCount, time) => {
  const key = getKey()
  const newData = JSON.stringify({rightCount, wrongCount, time})

  const todayData = getTodayData()
  if(todayData) {
    localStorage.setItem(key, JSON.stringify({
      rightCount: rightCount + todayData.rightCount,
      wrongCount: wrongCount + todayData.wrongCount,
      time: time + todayData.time
    }))
  } else {
    localStorage.setItem(key, newData)
  }
}
