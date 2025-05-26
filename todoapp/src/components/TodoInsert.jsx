import React, { useCallback, useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="flex bg-black" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일 입력"
        className="grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="p-2 bg-gray-300 cursor-pointer hover:bg-gray-500">
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoInsert;
