// async와 await
// async : 함수를 비동기 함수로 작성
// await : async 함수 안에서 사용, 해당 함수가 완료될 때낒; 코드 실행 일지 중지

// async (params) => {
//   await 비동기메서드명();
// };

// const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const data = await res.json();
// console.log(data);

// async function fetchTodo() {
//   return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
// }
// const todos = await fetchTodo();
// console.log(todos);

async function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => res.json());
}

async function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then((res) => res.json());
}
const todos = await fetchTodo();
console.log(todos);
if (todos.userId == 1) {
  const user = await fetchUser();
  console.log(user);
}
