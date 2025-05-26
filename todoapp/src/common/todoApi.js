// 서버에 데이터 요청

import axios from "axios";

// const fetchData = async () =>{
//     const res = await fetch(경로)
// }

// axios().get("path").then()
export const API_SERVER_HOST = "http://localhost:8080/todos";

export const getList = async () => {
  const res = await axios.get(API_SERVER_HOST);
  return res.data;
};

export const postTodo = async (todoObj) => {
  const res = await axios.post(`${API_SERVER_HOST}/add`, todoObj);
  return res.data;
};
export const putTodo = async (todoObj) => {
  const res = await axios.put(`${API_SERVER_HOST}/${todoObj.id}`, todoObj);
  return res.data;
};
export const removeTodo = async (id) => {
  const res = await axios.delete(`${API_SERVER_HOST}/${id}`);
  return res.data;
};
// export const
