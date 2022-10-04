const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const calendarElement = document.querySelector('.calendar');

const currentMonthElement = document.querySelector('.month');

const currentDayElement = calendarElement.querySelector('.days');

const currentDate = new Date().getDate();

const currentDay = new Date().getDay();

const currentMonth = new Date().getMonth() + 1;


const currentYear = new Date().getFullYear();

const firstDateofMonth = new Date(currentYear, currentMonth - 1, 1).getDay();

const amountOfDays = new Date(currentYear, currentMonth, 0).getDate();

const datesFirstColumn = document.querySelector('.days-of-month').children;

const calendarTable = currentDayElement.querySelectorAll("tr:not(:first-child) td");

const previousMonth = new Date(currentYear, currentMonth - 1, 0);

function getCurrentMonthYear(monthsArr = months, numberofMonth = currentMonth, year = currentYear) {

    return currentMonthElement.innerHTML = (monthsArr[numberofMonth - 1] + ' ' + year);

} 

function firstDayFinder(calendar, firstDateofMonth) {
    let firstDayOfMonth = null;
    
    const elementValues = Object.values(calendar); //array of objects
    
    for (const item of elementValues) {
        if (item.innerHTML === firstDateofMonth.toString() ) { //if number in cell === day of week
            firstDayOfMonth = item;
        }
    }
    
    return firstDayOfMonth;
}

function getCurrentMonthDates(calendar, firstDay, amountOfDays) {
    
    let date = 1;
    for(let i = firstDay.innerHTML - 1; i < calendar.length; i++ ) {
        calendar[i].innerHTML = date;
        if (date === currentDate) {
            calendar[i].style.border = 'dashed 1px #3a3a3a';
            calendar[i].style.borderRadius = '100px';
        }
        date++;

        if (date > amountOfDays) {
            break;
        }
    }

    
}

function getExtraDates(calendar, firstDay, amountOfDays) {
    let nextMonthDate = 1;
    let previousMonthDate = amountOfDays + 1;
    for (let i = 0; i < firstDay - 1; i++) {
        calendar[i].innerHTML = previousMonthDate++ - firstDay;
        
    }

    for (let i = amountOfDays + firstDay; i <= calendar.length; i++) {

        calendar[i - 1].innerHTML = nextMonthDate++;
    }
}

function extaDatesColorChanger(calendar, firstDate, lastDate) {

    let lastDate1 = lastDate + Number(firstDayFinder(calendarTable, firstDateofMonth).innerHTML);

    for (let i = 0; i < calendar.length; i++) {
        if (i < (firstDate - 1) || i > lastDate1 - 2) {
            calendar[i].style.opacity = '0.5';
        }
    }
}

getCurrentMonthYear();

getCurrentMonthDates(calendarTable, firstDayFinder(datesFirstColumn, firstDateofMonth), amountOfDays);

extaDatesColorChanger(calendarTable, firstDateofMonth, amountOfDays);

getExtraDates(calendarTable, firstDateofMonth, amountOfDays);

