console.log('Module 7.1');

const itemTemplate = ({ id, isDone, text }) => `
<li data-id="${id}">
  <label>
    <input type="checkbox" ${isDone ? 'checked' : ''} />
    <span>${text}</span>
  </label>
  <button>x</button>
</li>`;

let items = [
  { id: '1', text: 'sdfgsg', isDone: false },
  { id: '2', text: 'ery', isDone: true },
  { id: '3', text: 'xcvb', isDone: false },
  { id: '4', text: 'asdf', isDone: true },
  { id: '5', text: 'uoi', isDone: false },
];

const refs = {
  ul: document.querySelector('ul'),
  form: document.querySelector('form'),
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
  renderList();
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
  renderList();
};

const renderList = () => {
  const list = items.map(itemTemplate).join('');

  refs.ul.innerHTML = '';
  refs.ul.insertAdjacentHTML('beforeend', list);
};

refs.form.addEventListener('submit', handleSubmit);
refs.ul.addEventListener('click', handleListClick);

renderList();

// ------ event propagation -------
// document.querySelector('body').addEventListener('click', (event) => {
//   console.log('------------------------');
//   console.log(event.currentTarget);
//   console.log(event.target);
// });

// ------- question 1 ------
// const form = document.querySelector('.register-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const {
//     elements: { username, password },
//   } = event.currentTarget;

//   console.log(username.value, password.value);
// });
