console.log('Module 3.2');

// === arr ===
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// arr1[0] = 10;

// console.log(arr1);
// console.log(arr2);

// === obj ===
// const obj1 = { name: 'Peter' };
// const obj2 = { ...obj1 };

// obj2.name = 'Bobby';

// console.log(obj1);
// console.log(obj2);

// ==== arr1 + arr2 ====
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [
//   1,
//   1,
//   1,
//   ...lastWeekTemps,
//   0,
//   0,
//   0,
//   ...currentWeekTemps,
//   3,
//   3,
//   3,
// ];

// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// ==== obj1 + obj2 ====
// const obj1 = { name: 'Peter', age: 14 };
// const obj2 = { age: 15, eye: 'blue' };
// const obj3 = { ...obj1, ...obj2, age: 20 };

// console.log(obj3);

// ==== rest arr ====
// const sum = (...rest) => {
//   const numbers = rest;
//   let result = 0;

//   for (const number of numbers) {
//     result += number;
//   }

//   return result;
// };

// console.log(sum(1, 1, 1, 1));
// console.log(sum(1));

// 1 - multiple
// ...rest
// const multipleAndSum = (multiple, ...rest) => {
//   const numbers = rest;
//   let result = 0;

//   for (const number of numbers) {
//     result += number * multiple;
//   }

//   return result;
// };

// console.log(multipleAndSum(2, 4, 4, 4));
// console.log(multipleAndSum(3, 2, 2, 2, 2, 2, 2, 2, 2));

// ==== rest obj ====
// function deleteAge({ age, ...rest }) {
//   return {
//     ...rest,
//     id: 1,
//   };
// }

// const human1 = { name: 'Bobby', age: 15, eye: 'blue', adult: false };
// const human2 = { name: 'Peter', age: 20, eye: 'brown' };

// console.log(deleteAge(human1));
// console.log(deleteAge(human2));

// console.log(human1);
// console.log(human2);

// ==== destructure ====
// function createTransaction({ amount = 0, type = 'deposit' }) {
//   return {
//     amount,
//     type,
//     id: 5,
//   };
// }

// console.log(createTransaction({ amount: 100 }));

// const author = 'Bobby';
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { author: bookAuthor } = book;
// console.log(bookAuthor); // Bernard Cornwell

// ==== Деструктуризация массивов ====
// const arr = [1, 2, 3, 4, 5, 6];
// const [a, b, c] = arr;

// console.log(a + b + c);

// ==== arr swap ====
// let a = 1; // 2
// let b = 2; // 1

// [b, a] = [a, b];
// console.log(a, b);

// const temp = a;
// a = b; // 2, 2
// b = temp; // 2, 1

// console.log(a, b);

// ==== obj of parameters ====
// function doStuffWithBook({
//   title = 'Unknown Book',
//   numberOfPages,
//   downloads,
//   rating,
//   public,
// }) {
//   // Делаем что-то с параметрами
//   console.log(title);
//   console.log(numberOfPages);
//   console.log(rating);
//   // И так далее
// }

// doStuffWithBook({
//   // title: 'jshfgvj',
//   numberOfPages: 120,
//   rating: 8.5,
// });

// ==== default obj param ====
// function sum(a = 0, b = 0) {
//   console.log(a + b);
// }

// sum(1, 1);
// sum(1);

// function fn({ username } = {}) {
//   console.log(username);
// }

// // fn({ username: 'Bobby' }); // Bobby
// // fn({}); // undefined
// fn(); // error

// ==== destruct ====
// const obj = {
//   name: 'Bobby',
//   innerObj: {
//     age: 15,
//   },
// };

// const {
//   name,
//   innerObj: { age },
// } = obj;

// console.log(name, age);

// ==== example ====
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews = 0, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ==== Example 1  ====
// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Было
// console.log(calcBMI({ weight: '88,3', height: '1.75' }));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Ожидается
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

// ==== Example 2  ====
// Example 2 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Было
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Ожидается
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// ==== Example 3  ====
// Example 3 - Глубокая деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов.

// function getBotReport({
//   companyName,
//   bots: { repair: repairBots, defence: defenceBots },
// }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Было
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Ожидается
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// ==== Example 4  ====
// Example 4 - Деструктуризация
// Перепиши функцию так, чтобы она принимала объект параметров со свойствами companyName и stock и выводила репорт о количестве товаров на складе любой компании.

// Решение
// function getStockReport({ companyName, stock }) {
//   let total = 0;

//   for (const value of Object.values(stock)) {
//     total += value;
//   }

//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"

// ==== Example 5  ====
// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так,
// чтобы она возвращала новый объект контакта
// с добавленными свойствами id и createdAt,
// а также list со значением "default" если
// в partialContact нет такого свойства.

// Решение
// function createContact({ name, email, list = 'default' }) {
//   return {
//     id: generateId(),
//     createdAt: Date.now(), // from 01.01.1970
//     name,
//     email,
//     list,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }

// ==== Example 6  ====
// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект со свойством fullName,
// вместо firstName и lastName.

// Решение
function transformUsername({ firstName, lastName, ...rest }) {
  return {
    ...rest,
    fullName: `${firstName} ${lastName}`,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  }),
);

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  }),
);
