import React, { useState } from "react";
import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline, MdCheckBox } from "react-icons/md";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, content, completed } = todo;
  return (
    <div className="p-4 flex items-center even:bg-gray-200">
      <div className="flex grow items-center" onClick={() => onToggle(id)}>
        {completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className={`ml-2 flex-1 ${completed ? "line-through text-gray-400" : ""}`}>{content}</div>
      </div>
      <div className="flex items-center text-2xl text-red-300 cursor-pointer hover:text-red-600">
        <MdRemoveCircleOutline onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};

export default TodoListItem;
