import React, { useState } from "react";

const InputMultipleSample = () => {
  //   const [name, setName] = useState("");
  //   const [nickname, setNickname] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const { name, nickname } = inputs;

  const handleChanged = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleClick = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };
  return (
    <div>
      <div>
        <input type="text" placeholder="이름" name="name" onChange={handleChanged} value={name} />
      </div>
      <div>
        <input type="text" placeholder="닉네임" name="nickname" onChange={handleChanged} value={nickname} />
      </div>
      <div>
        <button onClick={handleClick}>초기화</button>
      </div>
      <div>
        <h4>
          입력값 : {name} ({nickname})
        </h4>
      </div>
    </div>
  );
};

export default InputMultipleSample;
