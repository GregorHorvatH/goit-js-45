console.log('Module 6.1');

const itemTemplate = ({ id, isDone, text }) => `
<li data-id="${id}">
  <label>
    <input type="checkbox" ${isDone ? 'checked' : ''} />
    <span>${text}</span>
  </label>
</li>`;

const items = [
  { id: 1, text: 'sdfgsg', isDone: false },
  { id: 2, text: 'ery', isDone: true },
  { id: 3, text: 'xcvb', isDone: false },
  { id: 4, text: 'asdf', isDone: true },
  { id: 5, text: 'uoi', isDone: false },
];

const refs = {
  body: document.querySelector('body'),
};

const createForm = () => {
  const form = document.createElement('form');
  const label = document.createElement('label');
  const span = document.createElement('span');
  const input = document.createElement('input');
  const button = document.createElement('button');

  span.textContent = 'Enter text';

  input.type = 'text'; // input.setAttribute('type', 'text');
  input.name = 'text'; // input.setAttribute('name', 'text');

  button.type = 'submit';
  button.textContent = '+ Add';

  label.append(span, input);
  form.append(label, button);

  refs.body.appendChild(form);
};

const createList = () => {
  const ul = document.createElement('ul');
  const list = items.map(itemTemplate).join('');

  ul.insertAdjacentHTML('beforeend', list);
  refs.body.appendChild(ul);
};

createForm();
createList();
