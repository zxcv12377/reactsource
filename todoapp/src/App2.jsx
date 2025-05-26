import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import TodoTemplate from "./components/TodoTemplate";

// 화면단 데이터 생성 후 수정, 삭제, 입력 작성

function App2() {
  // const todoList = [
  //   {
  //     id: 1,
  //     title: "react 기초 아라보기",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     title: "react 기초 알아보기",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: "react 기초 아라보자",
  //     completed: false,
  //   },
  //   {
  //     id: 4,
  //     title: "react 기초 알아보자",
  //     completed: true,
  //   },
  // ];
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/todos")
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => console.error(error));
  // }, []);
  const nextId = useRef(5);
  const [todos, setTodos] = useState([]);

  // 할일 입력 시 todoList에 추가
  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        title: text,
        completed: false,
      };

      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos]
  );

  // 할일 제거 시 todoList 제거
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id != id));
    },
    [todos]
  );
  //completed : true
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App2;
