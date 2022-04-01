console.log('Module 4.2');

// ===== map ======
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const links = planets.map((planet) => {
//   return `<a href=https://wikipedia.com/${planet}>${planet}</a>`;
// });

// console.log(links);

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// console.log(students.map(({ name }) => name));

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// console.log(
//   students.map((sdfgsdg) => ({
//     ...sdfgsdg,
//     id: Date.now(),
//     score: sdfgsdg.score + 100,
//   })),
// );

// console.log(students);

// ======= filter =======
// const arr = ['математика', 'физика', 'информатика', 'биология'];
// const newArr = arr.filter((item) => item !== 'физика' && item !== 'математика');

// console.log(arr);
// console.log(newArr);

// ======= filter with no result -> [] =======
// const numbers = [1, 2, 3];
// const newArr = numbers.filter((x) => x > 10);

// console.log(newArr);

// ====== find ======
// const numbers = [1, 2, 3, -10];
// const item = numbers.find((x) => x < 0);

// console.log(item);

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];
// const item = students.find(({ name }) => name.includes('о'));

// console.log(item);

// ======= findIndex =======
// const students = [
//   { name: 'Манго', score: 83 }, // 0
//   { name: 'Поли', score: 59 }, // 1
//   { name: 'Аякс', score: 37 }, // 2
//   { name: 'Киви', score: 94 }, // 3
//   { name: 'Хьюстон', score: 64 }, // 4
// ];
// const item = students.findIndex(({ name }) => name === 'Киви');

// console.log(item);

// ======= every =======
// const students = [
//   { name: 'Манго', score: 83 }, // 0
//   { name: 'Поли', score: 59 }, // 1
//   { name: 'Аякс', score: 37 }, // 2
//   { name: 'Киви', score: 94 }, // 3
//   { name: 'Хьюстон', score: 64 }, // 4
// ];

// const scoreEnough = students.every(({ score }) => score > 30);

// console.log(scoreEnough);

// ======= some =======
// const students = [
//   { name: 'Манго', score: 83 }, // 0
//   { name: 'Поли', score: 59 }, // 1
//   { name: 'Аякс', score: 37 }, // 2
//   { name: 'Киви', score: 94 }, // 3
//   { name: 'Хьюстон', score: 64 }, // 4
// ];

// const scoreEnough = students.some(({ score }) => score > 95);

// console.log(scoreEnough);

// ======= reduce =======
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let sum = 0; // accumulator

// for (const number of numbers) {
//   sum = sum + number;
// }

// console.log(sum);

// const sum = numbers.reduce((acc, number) => acc + number);
// console.log(sum);

// const students = [
//   { name: 'Манго', score: 83 }, // 0
//   { name: 'Поли', score: 59 }, // 1
//   { name: 'Аякс', score: 37 }, // 2
//   { name: 'Киви', score: 94 }, // 3
//   { name: 'Хьюстон', score: 64 }, // 4
// ]; // [object Object]59379464

// // let sum = 0; // accumulator

// // for (const student of students) {
// //   sum = sum + student.score;
// // }

// // console.log(sum);

// const sum = students.reduce((acc, student) => acc + student.score, 0);
// console.log(sum);

// ======= map vs reduce =======
// const students = [
//   { name: 'Манго', score: 83 }, // 0
//   { name: 'Поли', score: 59 }, // 1
//   { name: 'Аякс', score: 37 }, // 2
//   { name: 'Киви', score: 94 }, // 3
//   { name: 'Хьюстон', score: 64 }, // 4
// ];

// const names1 = students.map(({ name }) => name);
// const names2 = students.reduce((acc, { name }) => [...acc, name], []);

// console.log(names1);
// console.log(names2);

// ======= reduce -> {} ========
// const str = 'abrakadabra';
// // { a: 5, b: 2, r: 2, k: 1, d: 1 }

// const res = str
//   .split('')
//   .reduce(
//     (acc, letter) => ({
//       ...acc,
//       [letter]: acc[letter] ? acc[letter] + 1 : 1,
//     }),
//     {},
//   );

// console.log(res);

// const letter = 'b';
// const obj = { a: 1, b: 1, c: 4 };
// const newObj = { ...obj, [letter]: 2 }; // computed property

// console.log(obj);
// console.log(newObj);

// ====== sort ======
// const numbers = [5, 4, 1, 100, 2, 3, 10, 6];
// numbers.sort((a, b) => {
//   if (a > b) return 1; // >0
//   if (a < b) return -1; // <0

//   return 0;
// });
// numbers.sort((a, b) => a - b); // -99

// console.log(numbers);

// const fruits = ['orange', 'abd', 'apple', 'abc', 'strawberry', 'Orange'];
// fruits.sort();

// console.log(fruits);

// const students = [
//   { name: 'Манго', score: 83 }, // 0
//   { name: 'Поли', score: 59 }, // 1
//   { name: 'Аякс', score: 37 }, // 2
//   { name: 'Киви', score: 94 }, // 3
//   { name: 'Хьюстон', score: 64 }, // 4
// ];
// students.sort((a, b) => {
//   if (a.score < b.score) return 1; // >0
//   if (a.score > b.score) return -1; // <0

//   return 0;
// });

// console.log(students);

// ======= examples =======
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// =========================================
// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// const getModels = (cars) => cars.map(({ model }) => model);

// console.table(getModels(cars));

// =========================================
// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({
//     ...car,
//     price: car.price - car.price * discount,
//   }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// =========================================
// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) =>
//   cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// =========================================
// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = (cars) => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

// =========================================
// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, carType) =>
//   cars.filter(({ type }) => type === carType);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// =========================================
// Example 6 - Метод find
// const getCarByModel = (cars, carModel) =>
//   cars.find(({ model }) => model === carModel);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// =========================================
// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// const sortByAscendingAmount = (cars) =>
//   [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

// =========================================
// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = (cars) =>
//   [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

// =========================================
// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case 'asc':
//         return a.model.localeCompare(b.model);

//       case 'desc':
//         return b.model.localeCompare(a.model);

//       default:
//         return 0;
//     }
//   });

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// =========================================
// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = (cars) =>
//   cars.reduce((acc, { amount }) => acc + amount, 0);

// console.log(getTotalAmount(cars));

// =========================================
// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));

// =========================================
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

const getSortedCarsOnSale = (cars) =>
  cars
    .filter(({ onSale }) => onSale)
    .sort((a, b) => a.price - b.price)
    .map(({ model }) => model);

console.table(getSortedCarsOnSale(cars));
