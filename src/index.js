console.log('Module 1.2');

// ====== isNaN vs Number.isNaN ======
// === isNaN ===
// console.log(isNaN('a')); // true
// console.log(isNaN('b')); // true
// console.log(isNaN('bsdkfjgh')); // true
// console.log(isNaN(undefined)); // true
// console.log(isNaN(NaN)); // true

// console.log(isNaN(false)); // 0 - false
// console.log(isNaN(true)); // 1 - false
// console.log(isNaN('123')); // 123 - false
// console.log(isNaN(123)); // 123 - false

// === Number.isNaN ===
// console.log(Number.isNaN(NaN));

// console.log(Number.isNaN('a')); // false
// console.log(Number.isNaN('b')); // false
// console.log(Number.isNaN('bsdkfjgh')); // false
// console.log(Number.isNaN(undefined)); // false
// console.log(Number.isNaN(false)); // 0 - false
// console.log(Number.isNaN(true)); // 1 - false
// console.log(Number.isNaN('123')); // 123 - false
// console.log(Number.isNaN(123)); // 123 - false

// ======= break ========
// for (let i = 1; i <= 10; i += 1) {
//   if (i >= 6) {
//     break;
//   }

//   console.log(i);
// }

// === real life case ===
// const numbers = [2, 5, 12, 8, 9, 34, 56, 3];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] === 8) {
//     console.log('hurray!');
//     break;
//   }
// }

// ======= continue ========
// for (let i = 1; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }

// === question
// const friends = ['a', 'b'];

// for (let friend of friends) {
//   friend += '100';

//   console.log(friend);
// }

// console.log(friends);

// ===== loop ======
// for (let i = 10; i < 20; i += 2) {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 1; i < 6; i += 1) {
//   sum += i;
// }

// console.log(sum);
//                0    1    2
// const friends = ['a', 'b', 'c'];
// for (let i = 0; i < 3; i += 1) {
//   console.log(friends[i]);
// }

// ===== question ======
// function findLongestWord(string) {
//   let message = string.split(' ');
//   let biggest = [];

//   for (let i = 0; i < message.length; i += 1) {
//     if (biggest.length < message[i].length) {
//       biggest = message[i];
//     }
//   }

//   return biggest;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// ==== question =====
// function checkForSpam(message) {
//   let result = message.toLowerCase();

//   return result.includes('spam') || result.includes('sale');
// }

// console.log(checkForSpam('[spam] skjfghsfjh'));
// console.log(checkForSpam(' skjfghsfjh sale mnbhjkjk'));
// console.log(checkForSpam(' skjfghsfjh dfgSaLedgfd mnbhjkjk'));

// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-02.md
// ===================================
// Example 1 - Ввод пользователя и ветвления
// Используя конструкцию if..else и prompt, напиши код,
// который будет спрашивать: "Какое официальное название JavaScript?".
// Если пользователь вводит c,
// то показывай alert со строкой "Верно!",
// в противном случае - "Не знаете? ECMAScript!"

// const userInput = prompt('Како  е официальное название JavaScript?');
// let answer =
//   userInput?.toLowerCase() === 'ecmascript'
//     ? 'Верно!'
//     : 'Не знаете? ECMAScript!';

// if (userInput !== null && userInput.toLowerCase() === 'ecmascript') {
//   answer = 'Верно!';
// } else {
//   answer = 'Не знаете? ECMAScript!';
// }

// if (userInput?.toLowerCase() === 'ecmascript') {
//   answer = 'Верно!';
// } else {
//   answer = 'Не знаете? ECMAScript!';
// }

// console.log(answer);

// ===================================
// Example 2 - Отображение времени (if...else)
// Напиши скрипт для отображения часов и минут в консоли браузера
// в виде строки формата "14 ч. 26 мин.".
// Если значение переменной minutes равно 0,
// то выводи строку "14 ч.", без минут.

// const hours = 14;
// const minutes = 0;
// let timestring = minutes > 0 ? `${hours} ч. ${minutes} мин.` : `${hours} ч.`;

// // if (minutes > 0) {
// //   timestring = `${hours} ч. ${minutes} мин.`;
// // } else {
// //   timestring = `${hours} ч.`;
// // }
// console.log(timestring);

// ===================================
// Example 3 - Ветвеления
// Напиши скрипт, который выводит в консоль строку
// "Это положительное число",
// если в prompt пользователь ввел число больше нуля.
// Если был введен ноль, выводи в консоль строку "Это ноль".
// Если передали отрицательное число,
// в консоли должна быть строка "Это отрицательное число".

// const userInput = prompt('Введите число');
// const userInputNumber = Number(userInput);

// if (Number.isNaN(userInputNumber) || !userInput) {
//   console.log('это не число!');
// } else if (userInput > 0) {
//   console.log('Это положительное число');
// } else if (userInput < 0) {
//   console.log('Это отрицательное число');
// } else {
//   console.log('Это ноль');
// }

// ===================================
// Example 4 - Вложенные ветвления
// Напиши скрипт, который сравнивает числа в переменных a и b.

// Если оба значения больше 100,
// то выведи в консоль максимальное из них.

// В противном случае в консоли должна быть
// сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   // if (a > b) {
//   //   console.log(a);
//   // } else {
//   //   console.log(b);
//   // }
//   console.log(a > b ? a : b);
// } else {
//   console.log(b + 512);
// }

// ===================================
// Example 5 - Форматирование ссылки (endsWith)
// Напиши скрипт который проверяет
// заканчивается ли значение переменной link символом /.
// Если нет, добавь в конец значения link этот символ.
// Используй конструкцию if...else.

// let link = 'https://my-site.com/about';
// // Пиши код ниже этой строки

// // if (link[link.length - 1] !== '/') {
// if (!link.endsWith('/')) {
//   link += '/';
// }

// // Пиши код выше этой строки
// console.log(link);

// ===================== arguments ======
// function max() {
//   const numbers = Array.from(arguments);
//   let res = numbers[0];

//   for (let number of numbers) {
//     if (number > res) {
//       res = number;
//     }
//   }

//   return res;
// }

// console.log(max(2, 1, 5, 3, 8, 5, 4)); // 8
// console.log(max(-2, -1, -5, -3, -8, -5, -4)); // -1

// ======== home work question =======
// function findLongestWord(string) {
//   let words = string.split(' '); // ['jdfghds', 'iuy', 'sdfsfdafafasfa']
//   let biggest = '';

//   // for (let i = 0; i < words.length; i += 1) {
//   //   if (biggest.length < words[i].length) {
//   //     biggest = words[i];
//   //   }
//   // }

//   for (let word of words) {
//     if (word.length > biggest.length) {
//       biggest = word;
//     }
//   }

//   return biggest;
// }

// console.log(findLongestWord('jdfghds iuy sdfsfdafafasfa rtr'));
