import { useEffect, useState } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

function TodoList({ list, state }) {
  const [checked, setChecked] = useState("Active");
  const [newList, setNewList] = useState(list);
  // const newList = () => {
  //   if (state === "All") {
  //     return list;
  //   } else if (state === "Completed") {
  //     return list.filter((ele) => {});
  //   }
  // };

  const handleNewList = (num) => {
    if (checked === "Completed") {
      let a = list.filter((el) => el.id === Number(num));
      return setNewList(a);
    } else if (checked === "Active") {
      let a = list.filter((el) => !el.id === Number(num));
      return setNewList(a);
    }
  };

  console.log(newList);
  return (
    <div className="TodoList">
      {newList.map((el, index) => (
        <TodoListItem
          key={index}
          {...el}
          setChecked={setChecked}
          checked={checked}
          handleNewList={handleNewList}
        />
      ))}
    </div>
  );
}

export default TodoList;
