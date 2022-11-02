import "./TodoListItem.css";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";

function TodoListItem({ data, id, setChecked, handleNewList }) {
  const [fontColor, setFontColor] = useState(false);

  const handleClickChange = (e) => {
    setFontColor(!fontColor);
    setChecked((pre) => (pre === "Active" ? "Completed" : "Active"));
    handleNewList(e.target.name);
  };

  return (
    <div className="TodoListItem">
      <div className="todo-checkbox">
        <input
          name={id}
          id="checkbox"
          type="checkbox"
          onChange={handleClickChange}
          style={
            fontColor ? { accentColor: "#790252" } : { accentColor: "#fff" }
          }
        />
        <label
          htmlFor="checkbox"
          style={
            fontColor
              ? { color: "#790252", textDecoration: "line-through" }
              : { color: "#9f73ab" }
          }
        >
          {data}
        </label>
      </div>
      <span>
        <FaTrashAlt />
      </span>
    </div>
  );
}

export default TodoListItem;
