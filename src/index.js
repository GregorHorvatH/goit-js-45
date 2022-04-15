console.log('Q&A 1');

// ========= closures ===========
// function createCounter() {
//   let x = 0;
//   console.log('create new counter');

//   return function () {
//     x += 1;
//     console.log(x);
//   };
// }

// const counter1 = createCounter(); // x = 1
// const counter2 = createCounter(); // x = 1

// console.log('------ counter 1 -------');
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// counter1(); // 4

// console.log('------ counter 2 -------');
// counter2(); // 1
// counter2(); // 2

// console.log('------ counter 1 -------');
// counter1(); // 5
// counter1(); // 6

// ------ inheritance & polymorphysm ========
// class Human {
//   #age;

//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log('Im human');
//   }

//   get age() {
//     return this.#age;
//   }
// }

// class Doctor extends Human {
//   sayHello() {
//     console.log('Im doctor');
//   }
// }

// -------- question ---------
// class User {
//   constructor(email) {
//     this._email = email;
//   }

//   get email() {
//     return this._email;
//   }

//   set email(newEmail) {
//     this._email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor('mango@mail.com');
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

/// ======= question ========
// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],

//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     console.log(emails);

//     const uniqueEmails = new Set(emails);
//     console.log(uniqueEmails);

//     // return [...uniqueEmails];
//     console.log([...uniqueEmails]);
//   },
// };

// historyService.getEmails();

// ------ question --------
// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     // return this.blacklistedEmails.includes(email);
//     return Boolean(this.blacklistedEmails.find((item) => item === email));
//   }
//   // Change code above this line
// }
// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });
// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// // Можна якимось чином в методі isBlacklisted використати не includes а find?
// // Hello World

// ----- fn this -----
// const obj = {
//   name: 'Bobby',

//   sayHello() {
//     console.log(this);

//     const fn = () => {
//       console.log(this);
//     };

//     fn();
//   },
// };

// const obj2 = {
//   name: 'Peter',
// };

// obj.sayHello.call(obj2);

// ========= singleton =========
// class Human {
//   static sum(a, b) {
//     return a + b;
//   }
// }

// console.log(Human.sum(1, 2));

// ------ debug ---------
// const a = 1;
// const b = 2;
// const c = sum(a, b);

// console.log('sum:', c);

// function sum(a, b) {
//   const res = a + b;

//   return res;
// }

// ------- throw -------
// function sum(a, b) {
//   if (a + b < 0) {
//     throw 'bad arguments';
//   } else {
//     console.log(a + b);
//   }
// }

// try {
//   sum(1, -10);
// } catch (error) {
//   console.log('ups... my own error');
// }

// ----- question ------
// function multiple(a, b) {
//   return a * b;
// }

// function partial(fn, ...fixed) {
//   return function (...args) {
//     return fn.apply(this, fixed.concat(args));
//   };
// }

// const double = partial(multiple, 2, 2);

// // console.log(double);
// console.log(double(21));

// ------ IIFE ------
// (function () {
//   console.log('Hello');
// })();

// for (var i = 0; i < 10; i++) {
//   (function (x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 10);
//   })(i);
// }

// =========== how to cancel fetch by timeout ============
// const TEST_URL = 'https://hn.algolia.com/api/v1/search?query=react?page=2';

// const fetchWithTimeout = (url, delay, options = {}) =>
//   new Promise((resolve, reject) => {
//     const controller = new AbortController();
//     const { signal } = controller;

//     fetch(url, { ...options, signal })
//       .then((resp) => resolve(resp.json()))
//       .catch(() => console.log('fetch canceled'));

//     setTimeout(() => {
//       controller.abort();
//       reject('timeout');
//     }, delay);
//   });

// fetchWithTimeout(TEST_URL, 300)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
