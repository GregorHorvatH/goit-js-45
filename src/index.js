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
