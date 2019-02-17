export const usersUrl = () => {
  return `https://jsonplaceholder.typicode.com/users/`;
};
export const usersUrlWithId = (id?: number) => {
  return `https://jsonplaceholder.typicode.com/users/${id}`;
};

export const todosUrl = () => {
  return `http://jsonplaceholder.typicode.com/todos`;
};

export const todosUrlwithId = (id?: number) => {
  return `http://jsonplaceholder.typicode.com/todos/${id}`;
};
