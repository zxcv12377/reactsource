import React, { useEffect, useState } from "react";

const Life = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    console.log("마운트 / 업데이트 시 실행");

    setTimeout(() => {
      alert("Hey nigger~");
    }, 1000);

    return () => console.log("언마운트 시 실행");
  }, [flag, count]);

  return (
    <div>
      <h1>컴포넌트 라이프 사이클</h1>
      <button onClick={() => setCount(count + 1)}>up</button>
      <h2>{count}</h2>
    </div>
  );
};

export default Life;
