'use strict';

console.log('Module 5.1');

function fnSayHello(a = 0, b = 0) {
  console.log(this); // undefined || Window
  // console.log(`Hello my name is ${this.name}, I'm ${this.age} years old.`);
  // console.log(a + b);
}

// const bobby = {
//   name: 'Bobby',
//   age: 15,
// };

// const peter = {
//   name: 'Peter',
//   age: 20,
// };

// const chris = {
//   name: 'Chris',
//   age: 25,
// };

// fnSayHello.call(bobby, 10, 1);
// fnSayHello.apply(peter, [20, 30]);

// const newSayHello = fnSayHello.bind(chris);
// newSayHello(30, 70);

// bobby.sayHello();
// peter.sayHello();
// chris.sayHello();

// ========= bind ===========
// const chris = {
//   name: 'Chris',
//   age: 25,

//   sayHello() {
//     console.log(`Hello my name is ${this.name}, I'm ${this.age} years old.`);
//   },
// };

// chris.sayHello();

// const newSayHello = chris.sayHello.bind(chris);
// newSayHello();

// setTimeout(chris.sayHello.bind(chris), 2000);

// ======= arrow function =======
// function sayHello() {
//   console.log(`Hello my name is ${this.name}, I'm ${this.age} years old.`);
// }

// const chris = {
//   name: 'Chris',
//   age: 25,

//   sayHello() {
//     const fn = () => {
//       console.log(this);
//     };

//     fn();
//     // setTimeout(fn, 2000);
//   },
// };

// // chris.sayHello();

// const newSayHello = chris.sayHello;

// newSayHello();

// =======================================
// Example 1 - Мастерская драгоценностей
// Напишите метод calcTotalPrice(stoneName), который принимает название камня и рассчитывает и возвращает общую стоимость камней с таким именем, ценой и количеством из свойства stones.

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName,
//     );

//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// =======================================
// Example 2 - Телефонная книга
// Выполните рефакторинг методов объекта phonebook чтобы код заработал.

// const phonebook = {
//   contacts: [],

//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };

//     this.contacts.push(newContact);
//   },

//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },

//   getDate() {
//     return Date.now();
//   },
// };

// phonebook.add({
//   name: 'Mango',
//   email: 'mango@mail.com',
//   list: 'friends',
// });
// phonebook.add({
//   name: 'Poly',
//   email: 'poly@hotmail.com',
// });

// console.table(phonebook.contacts);

// =======================================
// Example 3 - Калькулятор
// Создайте объект calculator с тремя методами:

// read(a, b)- принимает два значения и сохраняет их как свойства объекта.
// add() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.

// const calculator = {
//   a: 0,
//   b: 0,

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   add() {
//     return this.a + this.b;
//   },

//   mult() {
//     return this.a * this.b;
//   },
// };

// calculator.read(10, 20);

// console.log(calculator.add());
// console.log(calculator.mult());

// ======== constructor =========
// class Human {
//   constructor(name, eye) {
//     this.name = name;
//     this.eye = eye;
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// const bobby = new Human('Bobby', 15);
// const peter = new Human('Peter', 20);

// console.log(bobby);
// console.log(peter);

// bobby.sayHello();
// peter.sayHello();
