export const getKey = (date = Date.now()) => {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth()
  const day = newDate.getDate()
  return `${year}/${month}/${day}}`
}

export const getTodayData = (date) => {
  const todayData = localStorage.getItem(getKey(date))

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

export const getPeriodData = (days) => {
  const data = []
  let lastItem = 1
  let counter = 0

  const date = new Date(); // today

  while((days && days > counter) || (!days && !lastItem)) {
    lastItem = getTodayData(date.setDate(date.getDate() - (counter ? 1 : 0)))

    data.push({...lastItem, date: `${date.getDate()} ${monthNames[date.getMonth()]}`})
    ++counter
  }

  return data
}

const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"
];
