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

const handleIsDoneChange = (event) => {
  const parent = event.target.closest('li');
  const { id } = parent.dataset;

  items = items.map((item) =>
    item.id === id
      ? {
          ...item,
          isDone: !item.isDone,
        }
      : item,
  );

  renderList();
};

const handleDeleteItem = (event) => {
  const parent = event.target.closest('li');
  const { id } = parent.dataset;

  items = items.filter((item) => item.id !== id);
  renderList();
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

const addItemListeners = () => {
  // checkboxes
  const listItems = document.querySelectorAll('input[type="checkbox"]');

  listItems.forEach((item) =>
    item.addEventListener('change', handleIsDoneChange),
  );

  // delete buttons
  const deleteButtons = document.querySelectorAll('li>button');

  deleteButtons.forEach((button) =>
    button.addEventListener('click', handleDeleteItem),
  );
};

const renderList = () => {
  const list = items.map(itemTemplate).join('');

  refs.ul.innerHTML = '';
  refs.ul.insertAdjacentHTML('beforeend', list);

  // TODO: remove this shit
  addItemListeners();
};

refs.form.addEventListener('submit', handleSubmit);

renderList();
