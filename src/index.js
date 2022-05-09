console.log('Module 9.1'); // 1

// const x = 2;
// const y = 3;

// function sum(a, b) {
//   console.log('hello from the timer'); // 4
//   console.log(a, b);
// }

// console.log('start'); // 2

// setTimeout(sum, 1000, x, y);

// console.log('end'); // 3

// let i;
// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     function (y) {
//       console.log(y);
//     },
//     1000,
//     i,
//   );
// }

// ----- date -----
// const date = new Date();

// console.dir(date);
// console.log('month:', date.getMonth());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.dir(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// ----- moment js ------
// const currentDate = moment();
// const sep11 = moment('01.09.2022 16:45:32', 'DD.MM.YYYY hh:mm:ss');
// const sep12 = moment('2022/09/01', 'YYYY/MM/DD');
// const sep13 = moment('09-01-2022', 'MM-DD-YYYY');

// console.log(currentDate);
// console.log(sep11.format('HH:mm YYYY/MM/DD'));
// console.log(sep12.format('YY/MM/DD'));
// console.log(sep13.format('YYYY-MM-DD hh:mm A'));

// ------- example ------
// for (let i = 3; i > 0; i--) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// ---- clock -----
const refs = {
  dateTime: document.querySelector('#date-time'),
  startStop: document.querySelector('#start-stop'),
};

let timerId = 0;

const showClock = () => {
  refs.dateTime.textContent = moment().format('YYYY MMM DD HH:mm:ss');
};

const startClock = () => {
  timerId = setInterval(showClock, 1000);
  refs.startStop.textContent = 'Stop';
  showClock();
};

const stopClock = () => {
  clearInterval(timerId);
  refs.startStop.textContent = 'Start';
  timerId = 0;
};

const handleButtonClick = () => {
  if (timerId) {
    stopClock();
  } else {
    startClock();
  }
};

refs.startStop.addEventListener('click', handleButtonClick);
