console.log('Module 4.1');

// ==== callback ====
// function sayHello() {
//   console.log('Hello');
// }

// function sayBye() {
//   console.log('Bye');
// }

// function fn(callback) {
//   console.log('-----------------------');
//   console.log('run another function...');

//   if (callback) {
//     callback();
//   }
// }

// fn(sayHello);
// fn(sayBye);
// fn(); // undefined

// // ==== callback hell =====
// fn(() => {
//   console.log('tro-lo-lo');

//   fn(() => {
//     console.log('third function');

//     fn(() => {
//       console.log('last function');
//     });
//   });
// });

// ===== filter callback =====
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const names = ['Bobby', 'Peter', 'Borek', 'John', 'Chris'];

// function filter(items, callback) {
//   const result = [];

//   for (const item of items) {
//     if (callback(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// // const lessFive = (x) => x < 5;
// // const greaterFive = (x) => x > 5;

// // console.log(filter(numbers, lessFive));
// // console.log(filter(numbers, greaterFive));
// // console.log(filter(numbers, (x) => x % 2 === 0));
// // console.log(filter(numbers, (number) => number % 2 === 1));

// console.log(filter(names, (name) => name.includes('o')));

// ==== map callback ====
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const names = ['Bobby', 'Peter', 'Borek', 'John', 'Chris'];

// function map(items, callback) {
//   const result = [];

//   for (const item of items) {
//     result.push(callback(item));
//   }

//   return result;
// }

// // console.log(map(numbers, (x) => x * 2));
// // console.log(map(numbers, (x) => x * 3));
// // console.log(map(numbers, (x) => x * 10));

// console.log(map(names, (name) => `<li>${name}</li>`));

// ==== forEach ====
// const names = ['Bobby', 'Peter', 'Borek', 'John', 'Chris'];

// // // for (let i = 0; i < names.length; i += 1) {
// // //   console.log(`${i + 1} - ${names[i]}`);
// // // }

// // names.forEach((name, idx) => {
// //   console.log(`${idx + 1} - ${name}`);
// // });

// names.forEach(function (name, idx) {
//   console.log(`${idx + 1} - ${name}`);
// });

// ===== question 1 =====
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);

//   callback(name);
// }

// registerGuest('Манго', greet);

// ====== get unique items ======
//                0
// const numbers = [111, 2, 4, 55, 55, 55, 111, 2];
// const unique = numbers.filter((item, idx, arr) => {
//   return arr.indexOf(item) === idx;
// });

// console.log(unique);

// ==== closure ====
// function Counter(start = 0) {
//   let x = start;

//   return function () {
//     x += 1;
//     console.log(x);
//   };
// }

// const counter1 = Counter(); // new function counter1
// const counter2 = Counter(); // new function counter2
// const counter3 = Counter(10); // new function counter3

// console.log('-------');
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// counter1(); // 4
// counter1(); // 5

// console.log('-------');
// counter2(); // 1
// counter2(); // 2
// counter2(); // 3
// counter2(); // 4
// counter2(); // 5

// console.log('-------');
// counter3(); // 11
// counter3(); // 12
// counter3(); // 13
// counter3(); // 14
// counter3(); // 15

// ===== Example 1 - Коллбек функции =====
// Напишите следующие функции:

// createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
// logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
// logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль

// Решение
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ==== Example 2 - Коллбек функции ====
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.
// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае
// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

// Решение
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ===== Example 3 - Коллбек функции =====
// Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// Решение
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

// ===== Example 4 - Стрелочные функции =====
// Выполните рефакторинг кода используя стрелочные функции.

// const createProduct = (partialProduct, callback) =>
//   callback({ id: Date.now(), ...partialProduct });

// const logProduct = (product) => console.log(product);

// const logTotalPrice = (product) =>
//   console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// ==== Example 5 - Стрелочные функции ====
// Выполните рефакторинг кода используя стрелочные функции.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// const handleSuccess = (message) => console.log(`✅ Success! ${message}`);
// const handleError = (message) => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// ===== Example 6 - Инлайн стрелочные функции ======
// Выполните рефакторинг кода используя стрелочные функции.

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
// console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

// ==== Example 7 - Метод forEach =====
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const logItems = (items) =>
//   items.forEach((item, i) => console.log(`${i + 1} - ${item}`));

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// ===== Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   nameList.forEach((name, idx) => console.log(`${name}: ${phoneList[idx]}`));
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ===== Example 9 - Метод forEach ====
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// const calсulateAverage = (...args) => {
//   let total = 0;

//   args.forEach((arg) => (total += arg));

//   return total / args.length;
// };

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// ======= question 1 ========
//               0  1  2  3  4  5  6 ...
// const numbers = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5]; // [1,2,3,4,5]
//               0  0  0  0  4  4  4  4  8  8  8

// const getUniqueItems = (items) =>
//   items.filter((item, index, array) => array.indexOf(item) === index);

// const getUniqueItems = (items) => {
//   const res = [];

//   for (const item of items) {
//     if (!res.includes(item)) {
//       res.push(item);
//     }
//   }

//   return res;
// };

// const getUniqueItems = (items) => Array.from(new Set(items));

// console.log(getUniqueItems(numbers));

// ====== Map vs Object =======
// const obj = {
//   asd: 123,
// };

// const obj1 = {}; // "[object Object]"
// const obj2 = {}; // "[object Object]"

// obj[obj1] = 111; // { asd: 123, [Object Object]: 111 }
// obj[obj2] = 222; // { asd: 123, [Object Object]: 222 }

// console.log(obj); // { asd: 123, [object Object]: 222 }

// let map = new Map();

// map.set('asd', 123);
// map.set(obj1, 111);
// map.set(obj2, 222);

// console.log(map);

// ===== map =====
// const numbers = [1, 2, 3];

// const map = (arr, callback) => {
//   const res = [];

//   // for (const item of arr) {
//   //   res.push(callback(item));
//   // }
//   arr.forEach((item, idx, array) => {
//     res.push(callback(item));

//     array[idx] = 987687;
//   });

//   return res;
// };

// const transform = (item) => `<li>${item}</li>`;

// console.log(map(numbers, (item) => item * 2)); // x2 -> [2,4,6]
// console.log(map(numbers, (item) => item * 3)); // x3 -> [3,6,9]
// console.log(map(['Bobby', 'Chris', 'Peter'], transform)); // <li>Bobby</li>

// console.log(numbers.map((item) => item * 2));

// ===== array function - arguments =====
// function fn1() {
//   console.log(arguments);
// }

// const fn2 = (...sdfg) => {
//   console.log(sdfg);
// };

// fn1(1, 2, 3, 4, 5, 6, 7);
// fn2(1, 2, 3, 4, 5, 6, 7);

// ===== array function - this =====
// function fn1() {
//   console.log(this); // ok
// }

// const fn2 = () => {
//   console.log(this); // not ok
// };

// ===== array function - hoisting =====
// fn1();

// function fn1() {
//   console.log('hello'); // ok
// }

// fn2();

// const fn2 = () => {
//   console.log(this); // not ok
// };

// ===== array function - return =====
// const add = (a, b) => a + b;

// console.log(add(1, 1)); // 2
// console.log(add(2, 2)); // 4

// ==== array.map ====
// done

// ==== array.filter ====
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filter = (items, callback) => {
//   const res = [];

//   items.forEach((item) => {
//     if (callback(item)) {
//       res.push(item);
//     }
//   });

//   return res;
// };

// // console.log(filter(numbers, (item) => item < 5)); // x < 5 -> [1,2,3,4]
// // console.log(filter(numbers, (x) => x > 8)); // x > 8 -> [9]
// // console.log(filter(numbers, (x) => x > 2 && x < 5)); // x > 2 && x < 5 -> [3,4]

// console.log(filter(['Bobby', 'Peter', 'Chris'], (item) => item.includes('r')));

// ==== array.find ====
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const find = (items, callback) => {
  for (const item of items) {
    if (callback(item)) {
      return item;
    }
  }
};

console.log(find(numbers, (x) => x === 3)); // x === 3 -> 3
console.log(find(numbers, (x) => x > 4)); // x > 4 -> 5
console.log(find(['Bobby', 'Peter', 'Chris'], (name) => name === 'Peter')); // name === Peter
console.log(find(numbers, (x) => x === 30)); // undefined
