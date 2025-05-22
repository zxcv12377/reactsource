import React, { useState } from "react";

const Movie = () => {
  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("./img/war3.jpg");
  const handleToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("./img/wind3.jpg");
    } else {
      setBtn(true);
      setSrc("./img/war3.jpg");
    }
  };

  return (
    <div>
      <img src={src} alt="" width="300" height="500" />
      <button onClick={handleToggle}>change</button>
    </div>
  );
};

export default Movie;
