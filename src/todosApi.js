// ---- API ----
export const URL = 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/todos';
// const URL = 'http://localhost:3000/todos';

// ---- axios ----
export const fetchTodos = () => axios.get(URL).then(({ data }) => data);

export const deleteTodo = (id) => axios.delete(`${URL}/${id}`);

export const updateTodo = (id, data) => axios.put(`${URL}/${id}`, data);

export const createTodo = (newItem) =>
  axios.post(URL, newItem).then(({ data }) => data);
