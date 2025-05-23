import React from "react";
import { useState } from "react";

const useCounter = (initailValue = 0) => {
  const [count, setCount] = useState(initailValue);

  // console.log(useState(0));

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return { count, increase, decrease };
};

export default useCounter;
