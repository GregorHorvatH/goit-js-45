import {
  URL,
  createTodo,
  deleteTodo,
  updateTodo,
  fetchTodos,
} from './todosApi.js';

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

const handleSubmit = async (event) => {
  event.preventDefault();

  const text = event.target.elements.text.value;
  const newItem = {
    text,
    isDone: false,
  };

  showLoader();

  try {
    const data = await createTodo(newItem);

    items.push(data);
    renderList();
    refs.form.reset();
  } catch (error) {
    console.log(error.message);
  }

  hideLoader();
};

const toggleItem = async (id) => {
  const item = items.find((item) => item.id === id);

  showLoader();

  try {
    await updateTodo(id, { isDone: !item.isDone });

    items = items.map((item) =>
      item.id === id
        ? {
            ...item,
            isDone: !item.isDone,
          }
        : item,
    );
    renderList();
  } catch (error) {
    console.log(error.message);
  }

  hideLoader();
};

const deleteItem = async (id) => {
  showLoader();

  try {
    await deleteTodo(id);
    items = items.filter((item) => item.id !== id);
    renderList();
  } catch (error) {
    console.log(error.message);
  }

  hideLoader();
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

const loadAndRender = async () => {
  showLoader();

  // const response = await fetch(URL);
  // items = await response.json();

  // const response = await axios(URL);
  // items = response.data;

  items = await fetchTodos();
  renderList();
  hideLoader();
};

refs.form.addEventListener('submit', handleSubmit);
refs.ul.addEventListener('click', handleListClick);

loadAndRender();

// ======= async/await =======
const promisedTimeout = (delay, text) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve(`ok - ${text}`);
    }, delay);
  });

const fn = async () => {
  console.log('start');

  // await promisedTimeout(2000, 'promise 1');
  // await promisedTimeout(2000, 'promise 2');
  const data = await Promise.all([
    promisedTimeout(2000, 'promise 1'),
    promisedTimeout(2000, 'promise 2'),
  ]);

  console.log(data);
  console.log('end');
};

fn();

// console.log('before fn');
// fn();
// console.log('after fn');

// const foo = async () => {
//   await Promise.reject('sdrgdsg');

//   return 'ok';
// };

// foo()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));
