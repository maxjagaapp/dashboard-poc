import moment from 'moment'

export function getAllMonths(past = false) {
  const allMonths = moment.months()
  if (past === true) {
    const thisMonth = new Date().getMonth()
    return allMonths.splice(0, thisMonth + 1)
  } else {
    return allMonths.reduce(
      (temp: { value: number; name: string }[], value, index) => {
        temp.push({ value: index + 1, name: value })
        return temp
      },
      []
    )
  }
}

export function isIsoDate(str: string) {
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false
  const d = new Date(str)
  return d.toISOString() === str
}
