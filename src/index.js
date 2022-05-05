console.log('Module 8.2');

const itemTemplate = ({ id, isDone, text }) => `
<li data-id="${id}">
  <label>
    <input type="checkbox" ${isDone ? 'checked' : ''} />
    <span>${text}</span>
  </label>
  <button>x</button>
</li>`;

let items = [];
// let items = [
//   { id: '1', text: 'sdfgsg', isDone: false },
//   { id: '2', text: 'ery', isDone: true },
//   { id: '3', text: 'xcvb', isDone: false },
//   { id: '4', text: 'asdf', isDone: true },
//   { id: '5', text: 'uoi', isDone: false },
// ];

const refs = {
  ul: document.querySelector('ul'),
  form: document.querySelector('form'),
};

const loadData = () => {
  try {
    items = JSON.parse(localStorage.getItem('todos'));
  } catch (error) {
    items = [];
    console.log(error.message);
  }
};

const saveData = () => {
  localStorage.setItem('todos', JSON.stringify(items));
};

const handleSubmit = (event) => {
  event.preventDefault();

  const text = event.target.elements.text.value;
  const newItem = {
    id: Date.now().toString(),
    text,
    isDone: false,
  };

  items.push(newItem);
  saveAndRender();
  refs.form.reset();
};

const toggleItem = (id) => {
  items = items.map((item) =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item,
  );
};

const deleteItem = (id) => {
  items = items.filter((item) => item.id !== id);
};

const handleListClick = (event) => {
  if (event.target === event.currentTarget) return;

  const parent = event.target.closest('li');
  const { id } = parent.dataset;

  switch (event.target.nodeName) {
    case 'INPUT':
      toggleItem(id);
      break;

    case 'BUTTON':
      deleteItem(id);
      break;

    default:
      break;
  }

  saveAndRender();
};

const renderList = () => {
  const list = items.map(itemTemplate).join('');

  refs.ul.innerHTML = '';
  refs.ul.insertAdjacentHTML('beforeend', list);
};

const saveAndRender = () => {
  saveData();
  renderList();
};

const loadAndRender = () => {
  loadData();
  renderList();
};

refs.form.addEventListener('submit', handleSubmit);
refs.ul.addEventListener('click', handleListClick);

loadAndRender();

// -------- question --------
// const person = {
//   age: 10,

//   setAge(newAge) {
//     this.age = newAge;
//   },

//   refreshAge(userId) {
//     const context = this;

//     fetchAgeFromDb(function (newAge) {
//       context.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
//   cb(20);
// }

// person.refreshAge();

// console.log(person.age);
