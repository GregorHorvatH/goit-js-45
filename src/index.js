console.log('Module 1.3');

// ==== ?? ====
// console.log(1 || 2); // 1
// console.log(1 ?? 2); // 1

// console.log(undefined || 2); // 2
// console.log(null || 2); // 2
// console.log(undefined ?? 4); // 4
// console.log(null ?? 4); // 4

// console.log(0 || 3); // 3
// console.log(0 ?? 3); // 0

// ==== slice ====
// const text =
//   'Метод slice() возвращает новый массив, содержащий копию части исходного массива ';

// const title = document.querySelector('h3');

// for (let i = 0; i < text.length; i += 1) {
//   const str = text.slice(i);

//   setTimeout(() => {
//     title.textContent = str;
//   }, i * 100);
// }

// ==== includes ====
// const logins = ['admin', 'vasya', 'qwerty'];
// const userInput = prompt('enter login');

// if (logins.includes(userInput)) {
//   console.log('welcome!');
// } else {
//   console.log('try again');
// }

// console.log('admin vasya qwerty'.includes('admin'));
// console.log('admin vasya qwerty'.includes('kjhgj'));

// === Number, String ====
// Напиши скрипт который переведёт значение totalMinutes (количество минут)
// в строку в формате часов и минут HH:MM.

// Скажите пожалуйста, как читается это выражение
// const doubleDigitHours = String(hours).padStart(2, 0);  именно  String()

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// console.log(Number('1234'));
// console.log(String(1234).padStart(8, '*'));

// ==== Array.from ====
// const obj = { 0: 1, 1: 2, 2: 3 };

// console.log([1, 2, 3]);
// console.log(obj);

// console.log(Array.from(obj));
// console.log(Object.values(obj));

// ==== debugging ====
// const logins = ['admin', 'vasya', 'qwerty'];
// const userInput = prompt('enter login');

// if (logins.includes(userInput.toLowerCase())) {
//   console.log('welcome!');
// } else {
//   console.log('try again');
// }

// =======
// Example 7 - Форматирование ссылки (тернарный оператор)
// Выполни рефакторинг кода задачи номер 4 используя тернарный оператор.

// let link = 'https://my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }

// link += link.includes('my-site') && !link.endsWith('/') ? '/' : '';
// console.log(link);

// ======
// Example 8 - if...else и логические операторы
// Напиши скрипт который будет выводить в консоль браузера строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending"
// больше либо равно 17 и меньше либо равно 24, выводи строку "Expires"
// больше 24 , выводи строку "Overdue"

// const hours = 200;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

// =====
// Example 9 - Дедлайн сдачи проекта (if...else)
// Напиши скрипт для отображения времени дедлайна сдачи проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня"
// Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра"
// Eсли до дедлайна 3+ дней - выведи строку "Дата в будущем"

// const daysUntilDeadline = 0;
// // Пиши код ниже этой строки

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня ночью спать не придётся');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else {
//   console.log('Дата в будущем');
// }

// ====
// Example 10 - Дедлайн сдачи проекта (switch)
// Выполни рефакторинг кода задачи номер 5 используя switch.

// const daysUntilDeadline = 0;

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня ночью спать не придётся');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Послезавтра');
//     break;
//   default:
//     console.log('Дата в будущем');
// }

// ======
// Example 11 - Цикл for
// Напиши цикл for который выводит в консоль браузера числа по возрастанию от min до max,
// но только если число кратное 5.

// const min = 20;
// const max = 100;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// =====
// Example 12 - Ввод пользователя и ветвления
// Напиши скрипт, который будет спрашивать логин с помощью prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль
// Если ничего не введено или нажата клавиша Esc - вывести строку "Отменено"
// В противном случае вывести строку "Я вас не знаю"
// Пароль проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!"
// Иначе выводить строку "Неверный пароль"

// const login = prompt('enter login');

// if (login === 'Админ') {
//   const password = prompt('enter password');

//   if (password === 'Я админ') {
//     console.log('Здравствуйте');
//   } else {
//     console.log('Неверный пароль');
//   }
// } else {
//   if (login === null || login === '') {
//     console.log('Отменено');
//   } else {
//     console.log('Я вас не знаю');
//   }
// }

// ===== regular expressions =====
// https://devdocs.io/javascript/global_objects/regexp/exec
// const reg = /[aeiou]+/gi;
// const str = 'jdooohfg 097 sdfadseq 34 sduufs 345';

// console.log(reg.exec(str));

// ===== game ======
// 1 --> 100

// let count = 0;
// let userInput;
// const x = ~~(Math.random() * 100) + 1;
// // console.log(x);

// do {
//   count++;
//   userInput = Number(prompt('enter your number'));
//   console.log(userInput);

//   if (x > userInput) {
//     console.log('x >', userInput);
//   } else if (x < userInput) {
//     console.log('x <', userInput);
//   } else {
//     console.log('Hurray!!!');
//   }
// } while (x !== userInput);

// console.log('count:', count);
