import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./MyComponent";
import Card from "./Card";
import Product from "./Product";

function App() {
  return (
    <>
      {/* <h1>Hello</h1> */}
      <MyComponent name="React">리액트</MyComponent>
      {/* <Card /> */}
      {/* <Product /> */}
    </>
  );
}

export default App;
