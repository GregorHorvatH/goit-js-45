// ---- API ----
const URL = 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/todos';

// ---- fetch ----
// export const fetchTodos = () => fetch(URL).then((resp) => resp.json());

// export const deleteTodo = (id) =>
//   fetch(`${URL}/${id}`, {
//     method: 'DELETE',
//   });

// export const updateTodo = (id, data) =>
//   fetch(`${URL}/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

// export const createTodo = (data) =>
//   fetch(URL, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   }).then((resp) => resp.json());

// ---- axios ----
export const fetchTodos = () =>
  axios.get(URL).then((resp) => {
    console.log(resp);

    return resp.data;
  });

export const deleteTodo = (id) => axios.delete(`${URL}/${id}`);

export const updateTodo = (id, data) => axios.put(`${URL}/${id}`, data);

export const createTodo = (newItem) =>
  axios.post(URL, newItem).then(({ data }) => data);
