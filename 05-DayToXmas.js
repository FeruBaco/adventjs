
const date1 = new Date('Dec 1, 2021') // 24
const date2 = new Date('Dec 24, 2021 00:00:01') // 1
const date3 = new Date('Dec 24, 2021 23:59:59') // 1
const date4 = new Date('December 20, 2021 03:24:00') // 5
const date5 = new Date('Dec 31, 2021') // -6
const date6 = new Date('Jan 1, 2022 00:00:01') // -7

console.log(daysToXmas(date6))

function daysToXmas (date) {
  const xmasDate = new Date('Dec 25, 2021')
  let numDate = 0
  // Validate days
  if (date.getFullYear() > xmasDate.getFullYear()) {
    numDate = (31 - (xmasDate.getDate() - date.getDate())) * -1
  } else {
    numDate = xmasDate.getDate() - date.getDate()
  }
  return numDate
}
