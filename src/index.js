console.log('Module 5.2');

// function Human(name, age) {
//   this.name = name;
//   this.age = age;

//   this.sayHello = function () {
//     console.log(`Hello my name is ${this.name}`);
//   };
//   this.birthday = function () {
//     this.age++; // += 1
//   };
// }

// const bobby = {
//   name: 'Bobby',
//   age: 15,
// };

// const peter = {
//   name: 'Peter',
//   age: 20,
// };

// const bobby = new Human('Bobby', 15);
// const peter = new Human('Peter', 20);

// console.log(bobby);
// console.log(peter);

// bobby.sayHello();
// bobby.birthday();
// console.log(bobby.age);

// ======= Object.create ========
// const animal = {
//   legs: 4,
// };

// const cat = Object.create(animal);
// cat.legs = 3;
// cat.eyes = 'yellow';

// console.log(cat);
// console.log(cat.legs);
// console.log(cat.__proto__.legs);
// console.log(cat.legs.toString());

// for (const key in cat) {
//   console.log(key, cat.hasOwnProperty(key));
// }

// console.log(Object.keys(cat));
// console.log(Object.values(cat));
// console.log(Object.entries(cat));

// const obj = {
//   from: 1,
//   to: 3,

//   [Symbol.iterator]: function () {
//     let current = this.from;
//     let last = this.to;

//     // метод должен вернуть объект с методом next()
//     return {
//       next() {
//         if (current <= last) {
//           return {
//             done: false,
//             value: current++,
//           };
//         } else {
//           return {
//             done: true,
//           };
//         }
//       },
//     };
//   },
// };

// for (const number of obj) {
//   console.log(number);
// }

// ======= class ========
// class Human {
//   constructor({ name, sex = '', age = 0 }) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// const bobby = new Human({ name: 'Bobby', sex: 'male', age: 15 });
// const peter = new Human({ name: 'Bobby', sex: 'male', age: 20 });
// const sdg = new Human({ name: 'Sdf' });

// console.log(bobby);
// console.log(peter);
// console.log(sdg);

// bobby.sayHello();
// peter.sayHello();

// ======== private keys ==========
// class Account {
//   #balance;
//   #history;

//   constructor(amount) {
//     this.#balance = amount;
//     this.#history = [];
//   }

//   set balance(value) {
//     this.#history.push({
//       value,
//       type: 'set balance',
//     });

//     if (value < 0) {
//       console.log('Error ....');
//       return;
//     }

//     this.#balance -= value;
//   }

//   get balance() {
//     this.#history.push({
//       type: 'get balance',
//     });

//     return this.#balance;
//   }

//   static sum(a, b) {
//     console.log(a + b);
//   }
// }

// const account1 = new Account(1000);

// account1.balance = -100; // set

// console.log(account1.balance); // get

// console.log(account1);

// Account.sum(1, 1);
// account1.sum(1, 1);

// ========== inheritance ==========
// class Human {
//   constructor({ name, sex = '', age = 0 }) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// class Doctor extends Human {
//   constructor({ experience, ...rest }) {
//     super(rest);

//     this.experience = experience;
//   }

//   heal() {
//     console.log('I can heal');
//   }

//   sayHello() {
//     console.log('Bye');
//   }
// }

// const house = new Doctor({ name: 'House', experience: 30 });

// console.log(house);

// house.sayHello();
// house.heal();

// ====== qusetion 1 =======
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

// editor._email = 'sdfgsg';
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// ======= replace with regular expression =======
// function abbreviate(string) {
//   return string.replace(/\B\w{2,}\B/g, (match) => match.length);
// }

// console.log(abbreviate('elephant-ride'));
// console.log(abbreviate('accessibility'));

// ======= += vs ++ ========
// let x = 1;

// console.log(x); // 1
// console.log((x += 1)); // 2
// console.log(x++); // 2 (post-increment)
// console.log(x); // 3
// console.log(++x); // 4 (pre-increment)

// ========================================
// Example 1 - Блоггер
// Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:

// email - почта, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// topics - массив тем на которых специализируется блоггер
// Класс ожидает один параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: User ${почта} is ${возраст} years old and has ${кол-во постов} posts.

// Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.

// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// ========================================
// Example 2 - Хранилище
// Напиши класс Storage который создаёт объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих.
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(removeItem) {
//     this.items = this.items.filter((item) => item !== removeItem);
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// ========================================
// Example 3 - User
// Напиши класс User который создаёт объект со свойствами login и email. Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.

// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(value) {
//     this.#login = value;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// ========================================
// Example 4 - Заметки
// Напиши класс Notes который управляет коллекцией заметок в свойстве items. Заметка это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   constructor(items) {
//     this.items = items;
//   }

//   addNote(item) {
//     this.items.push(item);
//   }

//   removeNote(value) {
//     this.items = this.items.filter(({ text }) => text !== value);
//   }

//   updateNote(value, newPriority) {
//     this.items = this.items.map((item) =>
//       item.text === value ? { ...item, priority: newPriority } : item,
//     );

//     // this.items = this.items.map((item) => {
//     //   if (item.text === value) {
//     //     return {
//     //       ...item,
//     //       priority: newPriority,
//     //     };
//     //   }
//     //   return item;
//     // });
//   }
// }

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updateNote('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// ========================================
// Example 5 - Toggle
// Напишите класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true/false). По умолчанию значение свойства on должно быть false.

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
