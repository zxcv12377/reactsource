import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");

  const handleClick = (e) => {
    if (e.target.name == "in") {
      setMessage("안녕하세요");
    } else {
      setMessage("안녕히 가세요");
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleClick} name="in">
          입장
        </button>
        <button onClick={handleClick} name="exit">
          퇴장
        </button>
      </div>

      <h1 style={{ color: color }}>{message}</h1>
      <div>
        <button style={{ color: "red" }} onClick={() => setColor("red")}>
          빨간색
        </button>
        <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
          파란색
        </button>
        <button style={{ color: "green" }} onClick={() => setColor("green")}>
          초록색
        </button>
      </div>
    </div>
  );
};

export default Say;
