import React from "react";

const MyStyle = () => {
  const style = {
    background: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <div>
      <h1 style={style}>홍길동</h1>
      <h1 style={{ color: "red", fontSize: "25px" }}>홍길동</h1>

      <input type="text" className="" maxLength={20} readOnly={false} />
      <br />
    </div>
  );
};

export default MyStyle;
