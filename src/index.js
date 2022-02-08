console.log('Module 2.1');

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// for (const client of clients) {
//   console.log(client);
// }

// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]

// const message = 'JavaScript это интересно';
// console.log(message.split(' ')); // ["JavaScript", "это", "интересно"]

// const message2 = 'JavaScript123это123интересно';
// console.log(message2.split(' ')); // ["'JavaScript123это123интересно'"]

// const message3 = 'JavaScript123это123интересно';
// console.log(message3.split('123')); // ["'JavaScript123это123интересно'"]

// const list = '1234156718911111112351895178961825';
// console.log(list.split('1'));

// let message4 = ' JavaScript     это  интересно     ';
// message4 = message4.trim();
// message4 = message4.replace(/  +/gi, ' ');
// console.log(message4.split(' ')); // ["JavaScript", "это", "интересно"]

// const colors = ['red', 'green', 'blue'];
// colors.splice(1, 0, 'yellow', 'pink');
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// ===== exercise 1 =====
// Example 1 - Базовые операции с массивом
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.
// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// console.log(genres);

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// console.log(genres);

// genres.unshift('Country', 'Reggae');
// console.log(genres);

// ===== exercise 2 =====
// Example 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = '8 11'; // 8 * 11
// const numbers = values.split(' ');
// const a = Number(numbers[0]);
// const b = Number(numbers[1]);
// const s = a * b;

// console.log(numbers);
// console.log(a, b);
// console.log('s:', s);

// ===== exercise 3 =====
// Example 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате
// номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// ===== exercise 4 =====
// Example 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров,
// разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//   console.log(namesArr[i], phonesArr[i]);
// }

// ===== exercise 5 =====
// Example 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки
// кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';
// const strArr = string.split(' ');
// strArr.shift();
// strArr.pop();

// console.log(strArr.join(' '));

// ===== exercise 6 =====
// Example 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';
// const strArr = string.split('');
// const reversedLetters = strArr.reverse();
// const reversedString = reversedLetters.join('');

// console.log(strArr);
// console.log(reversedLetters);
// console.log(reversedString);

// let newString = '';
// for (let i = string.length - 1; i >= 0; i -= 1) {
//   newString = newString.concat(string[i]);
// }
// console.log(newString);

// console.log('Welcome to the future'.split('').reverse().join(''));

// ===== exercise 7 =====
// Example 7 - Сортировка массива с циклом
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const numbers = [2, 1, 3, 7, 10, 4, 5];
// console.log(numbers);

// for (let i = 0; i < numbers.length; i += 1) {
//   for (let j = i + 1; j < numbers.length; j += 1) {
//     const a = numbers[i];
//     const b = numbers[j];
//     const temp = a;

//     if (b < a) {
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }
// console.log(numbers);

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs);
// // ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby'];
// // ['c++', 'haskel', 'javascript', 'php', 'python', 'ruby']
// // ['c++', 'haskel', 'javascript', 'python', 'php', 'ruby']

// for (let i = 0; i < langs.length; i += 1) {
//   for (let j = i + 1; j < langs.length; j += 1) {
//     const a = langs[i];
//     const b = langs[j];
//     const temp = a;

//     // first letters
//     if (b[0] < a[0]) {
//       langs[i] = langs[j];
//       langs[j] = temp;
//     }
//   }
// }
// console.log(langs);

// ===== exercise 8 =====
// Example 8 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве.
// Код должен работать для любого массива чисел.
// Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, -100, 37];
// let min = numbers[0];
// let max = numbers[0];

// for (const number of numbers) {
//   if (number < min) {
//     min = number;
//   }
//   if (number > max) {
//     max = number;
//   }
// }

// console.log(min); // 1
// console.log(max); // 94

// ===== guard clause =====
// function userIsAdmin(user) {
//   if (user === 'admin') return true;
//   if (user === 'root') return true;

//   return false;
// }

// console.log(userIsAdmin('admin'));
// console.log(userIsAdmin('root'));
// console.log(userIsAdmin('kjhjkh'));

// ==== spread ====
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1]; // spread

// console.log(arr1 === arr2);

// ==== rest ====
// function getAllExceptFirst(a, ...rest) {
//   return rest;
// }

// console.log(getAllExceptFirst(1, 2, 3, 4, 5, 6)); // 2, 3, 4, 5, 6
// console.log(getAllExceptFirst(1, 2)); // 2

// const fn = (...rest) => {
//   console.log(rest);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5, 6);

// ===== indexOf =====
const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

console.log(langs.indexOf('python')); // 0
console.log(langs.indexOf('javascript')); // 1
console.log(langs.indexOf('ruby')); // 5
console.log(langs.indexOf('fdxcgvhbjnkml')); // -1
