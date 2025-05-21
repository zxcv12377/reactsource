import React from "react";

const MyComponent = ({ name, age = "15", childern }) => {
  const user = {
    name: "Jane",
    email: "jane@gmail.com",
  };
  const numbers = [1, 2, 3, 4, 5];
  const colors = ["red", "blue", "green"];
  const items = [
    { id: 1, price: 1000 },
    { id: 2, price: 20000 },
  ];

  return (
    <>
      <h1>childern - {childern}</h1>
      <h2>
        {user.name}({user.email})
      </h2>
      <h2>{colors}</h2>
      <ul>
        {colors.map((color) => (
          <li>Color : {color}</li>
        ))}
      </ul>
      <ul>
        {items.map((item) => {
          <li key={item.id}>{item.price}</li>;
        })}
      </ul>
      <p>dobles : {numbers.map((n) => n * 2).join(", ")}</p>
      <p>evens : {numbers.filter((n) => n % 2 == 0).join(", ")}</p>
      <div>컴포넌트</div>
      <h1>
        {name} : {age}
      </h1>
      {name === "리액트" ? <p>리액트입니다.</p> : <p>리액트가 아닙니다</p>}
      {name === "리액트" && <p>리액트입니다{age}</p>}
      <p>name : {name ?? <em>No Name</em>}</p>
      <p>name : {name || <em>No Name</em>}</p>
    </>
  );
};

export default MyComponent;
