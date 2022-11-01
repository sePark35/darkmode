import { useEffect, useState } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

function TodoList({ list }) {
  const [checked, setChecked] = useState(false);

  // useEffect(() => {
  //   fetch("data/todolist.json")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // });

  return (
    <div className="TodoList">
      {list.map((el, index) => (
        <TodoListItem
          key={index}
          {...el}
          setChecked={setChecked}
          checked={checked}
        />
      ))}
    </div>
  );
}

export default TodoList;
