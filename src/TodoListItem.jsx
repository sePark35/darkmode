import "./TodoListItem.css";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";

function TodoListItem({ el, handleListData, handleListDelete }) {
  const { data, id, action } = el;

  return (
    <div className="TodoListItem">
      <div className="todo-checkbox">
        <input
          name={id}
          id={`checkbox+${id}`}
          type="checkbox"
          checked={action === "Completed"}
          onChange={handleListData}
          style={
            action === "Completed"
              ? { accentColor: "#790252" }
              : { accentColor: "#fff" }
          }
        />
        <label
          htmlFor={`checkbox+${id}`}
          style={
            action === "Completed"
              ? { color: "#790252", textDecoration: "line-through" }
              : { color: "#9f73ab" }
          }
        >
          {data}
        </label>
      </div>
      <span id={id} onClick={handleListDelete}>
        🗑
      </span>
    </div>
  );
}

export default TodoListItem;
