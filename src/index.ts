import moment from 'moment'

// set languaje of date
moment.locale('es') 

const format = 'dddd Do MMMM YYYY'
const today = moment()
// Subtract amount of time, defined by one quantity and one kind of time
// clone is used because i don't want to change the referented value 'today'
const yesterday = today.clone().subtract( 1, 'days') 
// Add funtion add amount of time
const tomorrow = today.clone().add( 1, 'days') 
// Set Date
const morochaBirthday = moment('1991-06-23')
const myBirthday = moment([1987,3,23])
// Quantity of Days in Februarry
const DaysOfMonth = moment([2020,1]).daysInMonth()


console.table({ 
    today: today.format(format), // Date Formated with Day, day formated, month and year. Ex 'Friday 24th June 2022'
    yesterday: yesterday.format(format),
    tomorrow: tomorrow.format(format),
    morochaBirthday: morochaBirthday.format(format),
    myBirthday: myBirthday.format(format),
    DaysOfMonth: DaysOfMonth,
    nearestDay: today > yesterday ? true : false,
}); 