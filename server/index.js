const express = require('express');

const app = express(); // create server instance
const port = 3000;

let users = [
  { name: 'Bobby', age: 15 },
  { name: 'Peter', age: 20 },
  { name: 'John', age: 25 },
  { name: 'John', age: 25 },
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('about tro-lo-lo!');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
