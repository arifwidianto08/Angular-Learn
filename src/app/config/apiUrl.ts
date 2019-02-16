export const apiUrl = () => {
  return `https://jsonplaceholder.typicode.com/users/`;
};
export const apiUrlWithId = (id?: number) => {
  return `https://jsonplaceholder.typicode.com/users/${id}`;
};
