import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async () => {
  const response = await axios.get(`${API_URL}?_limit=10`);
  return response.data;
};

export const addTodo = async (title: Todo["title"]) => {
  const response = await axios.post(API_URL, {
    title,
    completed: false,
  });
  return response.data;
};

export const deleteTodo = async (id: Todo["id"]) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
