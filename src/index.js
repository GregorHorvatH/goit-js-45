console.log('Module 9.2');

// ---- question -----
// const date = new Date();

// console.dir(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
// console.log(typeof date); // object

// const dateStr = date.toString();

// console.dir(dateStr);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
// console.log(typeof dateStr); // string

// ----- example - callback hell ----
// const timer1 = (callback) => {
//   setTimeout(() => {
//     console.log('hello 1');

//     if (callback) {
//       callback();
//     }
//   }, 1000);
// };

// const timer2 = (callback) => {
//   setTimeout(() => {
//     console.log('hello 2');

//     if (callback) {
//       callback();
//     }
//   }, 1000);
// };

// const timer3 = (callback) => {
//   setTimeout(() => {
//     console.log('hello 3');

//     if (callback) {
//       callback();
//     }
//   }, 1000);
// };

// const timer4 = (callback) => {
//   setTimeout(() => {
//     console.log('hello 4');

//     if (callback) {
//       callback();
//     }
//   }, 1000);
// };

// timer1(() => {
//   timer2(() => {
//     timer3(() => {
//       timer4();
//     });
//   });
// });

// ----- example - promise ----
// const timer1 = () =>
//   new Promise((resolve, reject) => {
//     reject('lkdfjghfkjg');
//     // setTimeout(() => {
//     //   console.log('hello 1');
//     //   resolve();
//     // }, 1000);
//   });

// const timer2 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('hello 2');
//       resolve();
//     }, 1000);
//   });

// const timer3 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('hello 3');
//       resolve();
//     }, 1000);
//   });

// const timer4 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('hello 4');
//       resolve();
//     }, 1000);
//   });

// timer1()
//   .then(() => {
//     return timer2();
//   })
//   .then(() => {
//     return timer3();
//   })
//   .then(() => {
//     timer4();
//   });

// const runTimers = async () => {
//   await timer1();
//   await timer2();
//   await timer3();
//   await timer4();
// };

// runTimers();

// timer1()
//   .then(() => {
//     console.log('timer done');
//   })
//   .catch((error) => {
//     console.log('ups...');
//   })
//   .finally(() => {
//     console.log('finish');
//   });

// ----- example - mock fetch ----
// const mockFetchUsers = () =>
//   new Promise((resolve, reject) => {
//     const users = [
//       { id: 1, name: 'Bobby', age: 15 },
//       { id: 2, name: 'Peter', age: 20 },
//       { id: 3, name: 'Chris', age: 25 },
//     ];

//     setTimeout(() => {
//       resolve(users);
//     }, 1000);
//   });

// const mockFetchAccounts = () =>
//   new Promise((resolve, reject) => {
//     const accounts = [
//       { id: 10, number: 2343241, amount: 123, userId: 3 },
//       { id: 20, number: 6346345, amount: 222, userId: 1 },
//       { id: 30, number: 7897788, amount: 555, userId: 2 },
//     ];

//     setTimeout(() => {
//       resolve(accounts);
//     }, 2000);
//   });

// wait 4 sec
// const syncTimer = async () => {
//   console.time('promise all');

//   await mockFetchUsers()
//     .then((data) => {
//       console.table(data);
//     })
//     .then(mockFetchAccounts)
//     .then((data) => {
//       console.table(data);
//     });

//   console.timeEnd('promise all');
// };

// syncTimer();

// wait 2 sec
// const syncTimer = async () => {
//   console.time('promise all');
//   await Promise.all([mockFetchUsers(), mockFetchAccounts()]).then(
//     ([users, accounts]) => {
//       console.table(users);
//       console.table(accounts);
//     },
//   );
//   console.timeEnd('promise all');
// };

// syncTimer();

// ------ Promise.resolve -------
function sum(a, b) {
  // return a + b;
  return Promise.resolve(a + b);
}

// sum(1, 10)
//   .then((data) => {
//     console.log('step 1:', data);

//     return data * 2;
//   })
//   .then((data) => {
//     console.log('step 2', data);

//     return data + 3;
//   })
//   .then((data) => {
//     console.log('step 3', data);
//   });

// sum()
// .then(() => {
//   // spinnerOff();
// })
// .catch(() => {
//   // spinnerOff();
// })
// .finally(() => {
//   spinnerOff();
// });

// ------ widget ------
import Counter from './counter.js';

const counter1 = new Counter({ selector: '#counter-1', initialValue: 1 });
const counter2 = new Counter({ selector: '#counter-2', initialValue: 10 });
const counter3 = new Counter({ selector: '#counter-3', initialValue: 25 });
