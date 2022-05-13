/*
In this activity, we will be converting date strings like "2017/12/02", into more English friendly date strings like December 2nd, 2017.

Talking Calendar
We will be given a date as a string (not a Date object). The date will always be formatted as YYYY/MM/DD. We will have to parse the given string and produce a human readable date.

Instruction
Create a function named talkingCalendar that takes in a date string with the format YYYY/MM/DD, and returns a new human readable date that looks like December 2nd, 2017.
*/

const talkingCalendar = function(date) 
{
  // Your code here

  const dateSplit = date.split('/');
  const year = dateSplit[0];
  const month = dateSplit[1];
  const day = dateSplit[2];

  return `${getMonthName(month)} ${getDay(day)}, ${year}`;

};

const getMonthName = (month) => 
{
  const monthName =
        {
    01: 'January', 02: 'February', 03: 'March',
    04: 'April', 05: 'May', 06: 'June',
    07: 'July', 08: 'August', 09: 'September',
    10: 'October', 11: 'November', 12: 'December'
        };
  return monthName[month];
}

const getDay = (day) => 
{
  switch(day)
  {
    case '01': 
      day = '1st';
      break;
    case '02': 
      day = '2nd';
      break;
    case '03': 
      day = '3rd';
      break;    
    case '11': case '21': case '31':
      day += 'st';
      break;
    case '12': case '22':
      day += 'nd';
      break;
    case '13': case '23':
      day += 'rd';      
      break;
    default:
      day += 'th';
      break;
  }
  return day;
}

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
