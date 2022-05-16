import { createTodo, deleteTodo, updateTodo, fetchTodos } from './api.js';

// ---- UI ----
const itemTemplate = ({ id, isDone, text }) => `
<li data-id="${id}">
  <label>
    <input type="checkbox" ${isDone ? 'checked' : ''} />
    <span>${text}</span>
  </label>
  <button>x</button>
</li>`;

let items = [];

const refs = {
  ul: document.querySelector('ul'),
  form: document.querySelector('form'),
  loader: document.getElementById('loader'),
};

const showLoader = () => {
  refs.loader.classList.add('show');
};

const hideLoader = () => {
  refs.loader.classList.remove('show');
};

const loadData = () =>
  fetchTodos().then((data) => {
    items = data;
  });

const handleSubmit = (event) => {
  event.preventDefault();

  const text = event.target.elements.text.value;
  const newItem = {
    text,
    isDone: false,
  };

  showLoader();

  createTodo(newItem)
    .then((data) => {
      items.push(data);
    })
    .then(() => {
      renderList();
    })
    .then(() => {
      refs.form.reset();
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      hideLoader();
    });
};

const toggleItem = (id) => {
  const item = items.find((item) => item.id === id);

  showLoader();

  updateTodo(id, { isDone: !item.isDone })
    .then(() => {
      items = items.map((item) =>
        item.id === id
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item,
      );
    })
    .then(() => {
      renderList();
    })
    .finally(() => {
      hideLoader();
    });
};

const deleteItem = (id) => {
  showLoader();

  deleteTodo(id)
    .then(() => {
      items = items.filter((item) => item.id !== id);
    })
    .then(() => {
      renderList();
    })
    .finally(() => {
      hideLoader();
    });
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
};

const renderList = () => {
  const list = items.map(itemTemplate).join('');

  refs.ul.innerHTML = '';
  refs.ul.insertAdjacentHTML('beforeend', list);
};

const loadAndRender = () => {
  showLoader();

  loadData()
    .then(() => {
      renderList();
    })
    .finally(() => {
      hideLoader();
    });
};

refs.form.addEventListener('submit', handleSubmit);
refs.ul.addEventListener('click', handleListClick);

loadAndRender();
