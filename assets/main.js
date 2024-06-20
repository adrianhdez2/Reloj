const textH = document.querySelector('.hour');
const textM = document.querySelector('.minutes');
const textS = document.querySelector('.seconds');
const textDate = document.querySelector('.date');
const textDay = document.querySelector('.day');
const textMonth = document.querySelector('.month');
const date = new Date();
let day = '';
let month = '';

let number = date.getDate();

const months = [
    {
        id: 0,
        month: 'January'
    },
    {
        id: 1,
        month: 'February'
    },
    {
        id: 2,
        month: 'March'
    },
    {
        id: 3,
        month: 'April'
    },
    {
        id: 4,
        month: 'May'
    },
    {
        id: 5,
        month: 'June'
    },
    {
        id: 6,
        month: 'July'
    },
    {
        id: 7,
        month: 'August'
    },
    {
        id: 8,
        month: 'September'
    },
    {
        id: 9,
        month: 'Octuber'
    },
    {
        id: 10,
        month: 'November'
    },
    {
        id: 11,
        month: 'December'
    }
];
switch (date.getDay()) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    case 7:
        day = "Sunday"
        break;
}

textDate.textContent = day;
textDay.textContent =
    (number < 10) ?
        "0" + number
        :
        number

    ;
months.filter((item) => {
    if (item.id === date.getMonth()) {
        month = item.month;
    }
});
textMonth.textContent = month + ", " + date.getFullYear();

setInterval(() => {
    textS.style.transform = "scale(1)";

    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }


    textH.textContent = hour;
    textM.textContent = minutes;
    textS.textContent = seconds;
}, 1000);