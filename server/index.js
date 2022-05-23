const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const cors = require('cors');
const app = express();
const port = 3000;

let todos = [
  { text: 'купити хліб', isDone: true, id: '1' },
  { text: 'купити молоко', isDone: true, id: '2' },
  { text: 'купити сир', isDone: false, id: '3' },
];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = {
    id: uuid.v4(),
    ...req.body,
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(({ id }) => id !== req.params.id);

  res.status(204).send();
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const newTodo = req.body;

  todos = todos.map((todo) => (todo.id === id ? newTodo : todo));

  res.send(newTodo);
});

app.patch('/todos/:id', (req, res) => {
  const { id } = req.params;
  const update = req.body;

  todos = todos.map((todo) =>
    todo.id === id
      ? {
          ...todo,
          ...update,
        }
      : todo,
  );

  res.send(todos.find((todo) => todo.id === id));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
