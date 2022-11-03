import { useState } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

function TodoList({ list, handleListData, handleListDelete }) {
  return (
    <div className="TodoList">
      {list.map((el, index) => (
        <TodoListItem
          key={index}
          el={el}
          handleListData={handleListData}
          handleListDelete={handleListDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
