import { useCallback, useEffect, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import TodoTemplate from "./components/TodoTemplate";
import { getList, postTodo, putTodo, removeTodo } from "./common/todoApi";
// import axios from "axios";

// DB와 연동
function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/todos")
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => console.error(error));
  // }, []);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList().then((data) => {
      console.log(data);
      setTodos(data);
      setLoading(false);
    });
  }, []);

  // 할일 입력 시 todoList에 추가
  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        content: text,
        completed: false,
      };
      postTodo(newTodo).then((data) => {
        console.log("입력 ", data);
        setTodos(todos.concat(newTodo));
      });
    },
    [todos]
  );

  // 할일 제거 시 todoList 제거
  const onRemove = useCallback(
    (id) => {
      removeTodo(id).then((data) => {
        console.log("삭제", data);
      });
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );
  //completed : true
  const onToggle = useCallback(
    (id) => {
      // 업데이트 할 todo 찾기
      const oriTodo = todos.find((todo) => todo.id == id);
      const updateTodo = { ...oriTodo, completed: !oriTodo.completed };
      putTodo(updateTodo).then((data) => console.log(data));

      setTodos(todos.map((todo) => (todo.id === id ? updateTodo : todo)));
    },
    [todos]
  );

  if (loading) {
    return <div className="text-center text-4xl font-extrabold text-fuchsia-700 m-20">LOADING........</div>;
  }

  if (!todos) {
    return null;
  }

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;
