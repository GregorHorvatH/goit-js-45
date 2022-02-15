console.log('Module 3.1');

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// function getValueByKeyName(keyName) {
//   return book[keyName]; // book["title"], book["author"]
// }

// console.log(getValueByKeyName('title')); // The Last Kingdom
// console.log(getValueByKeyName('author')); // Bernard Cornwell

// book.title = 'New Title';
// console.log(getValueByKeyName('title')); // The Last Kingdom

// book.qwerty = 'lorem ipsum';
// console.log(book);

// book['asdfg'] = 'ipsum lorem';
// console.log(book);

// ===== Вычисляемые свойства =====
// function createObjectDynamically(keyName, value) {
//   return {
//     name: 'Bobby',
//     age: 15,
//     [keyName]: value,
//   };
// }

// console.log(createObjectDynamically('eye', 'blue'));
// console.log(createObjectDynamically('country', 'USA'));
// console.log(createObjectDynamically('sex', 'undefined'));

// ===== example =====
// abcaba
// { a: 3, b: 2, c: 1 }

// const str = 'abcaba';
// const res = {};

// for (const letter of str) {
//   if (res[letter]) {
//     // res["a"], res["b"]
//     res[letter] += 1;
//   } else {
//     res[letter] = 1;
//   }
// }

// console.log(res);

// // ===== inheritance =====
// const Human = {
//   name: '',
//   age: 0,
//   eye: '',

//   sayHello() {},
// };

// const Doctor = {
//   // ... Human (name, age ...)
//   ocupation: 'therapy',
// };

// const Pilot = {
//   // ... Human (name, age ...)
//   flyghtLicense: 'B',
// };

// ===== example =====
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    // rating: 0,
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    rating: 8.51,
  },
  {
    title: 'Сон смешного человека',
    author: 'Федор Достоевский',
    rating: 7.75,
  },
];

let totalRating = 0; // +8.38, +8.51, 7.75
let count = 0;

for (const book of books) {
  if (!isNaN(book.rating)) {
    totalRating += book.rating || 0;
    count += 1;
  }
}

const averageRating = (totalRating / count).toFixed(1);
console.log(averageRating); // 8.2

// ===== example ======
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// for (const color of colors) {
//   const keys = Object.keys(color);
//   console.log(keys);
//   console.log(color.hex);
//   console.log(color.rgb);
// }

// ===== example =====
// const OBJ = Object.freeze({
//   name: 'Bobby',
//   age: 15,
//   innerObj: Object.freeze({
//     x: 5,
//   }),
// });

// OBJ.name = 'Peter';
// OBJ.innerObj.x = 10;

// console.log(OBJ);

// ===== example =====
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
//   location: {},
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// // apartment.location = {};
// apartment.location.city = 'Kingston';
// apartment.location.country = 'Jamaica';

// ==== example 1 ====
// Example 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mod = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// ==== example 2 ====
// Example 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// let sum = 0;

// for (const value of values) {
//   sum += value;
// }

// console.log(sum);

// ==== example 3 ====
// Example 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 3 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 200, quantity: 2 },
//   { name: 'dfghj', price: 100, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'Щебень'));
// console.log(calcTotalPrice(stones, 'Изумруд'));
// console.log(calcTotalPrice(stones, 'dfghj'));

// ==== example 4 ====
// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     const transaction = {
//       id: this.transactions.length,
//       amount,
//       type,
//     };

//     return transaction;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log('снятие такой суммы не возможно');
//       return;
//     }

//     this.balance -= amount;
//     this.transactions.push(
//       this.createTransaction(amount, Transaction.WITHDRAW),
//     );
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     // for (const transaction of this.transactions) {
//     //   if (transaction.id === id) {
//     //     return transaction;
//     //   }
//     // }

//     return this.transactions.find((transaction) => transaction.id === id);
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     // let sum = 0;

//     // for (const transaction of this.transactions) {
//     //   if (transaction.type === type) {
//     //     sum += transaction.amount;
//     //   }
//     // }

//     // return sum;

//     return this.transactions.reduce(
//       (acc, transaction) => (transaction.type === type ? acc + transaction.amount : acc),
//       0,
//     );
//   },
// };

// account.deposit(1000);
// account.deposit(1000);
// account.deposit(1000);
// // console.log(account);

// account.withdraw(2000);
// account.withdraw(500);
// console.log(account);

// account.withdraw(1000);

// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// // ==== this ====
// const obj = {
//   name: 'Bobby',

//   sayHello() {
//     console.log(`My name is ${this.name}`);
//   },
// };

// obj.sayHello();
