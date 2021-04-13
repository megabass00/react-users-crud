const isIntlFormatSupported = typeof Intl !== 'undefined' && Intl

const intlOptions = {
  dateStyle: 'full',
  timeStyle: 'short',
}
const dateOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'narrow',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: false,
}

export const getDateFormatted = (date) => {
  if (!date || typeof date !== 'object' || !(date instanceof Date)) return '---'
  let dateFormatted
  if (isIntlFormatSupported) {
    const formatter = new Intl.DateTimeFormat('en-US', intlOptions)
    dateFormatted = formatter.format(date)
  } else {
    dateFormatted = date.toLocaleString(dateOptions)
  }
  console.log('*** dateFormatted', dateFormatted)
  return dateFormatted
}
