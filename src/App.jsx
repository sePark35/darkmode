import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import Input from "./Input";

function App() {
  const [list, setList] = useState([]);

  const onAdd = (data, id) => {
    const copyArr = [...list];
    copyArr.push({ data: data, id: id });
    setList(copyArr);
  };

  useEffect(() => {
    fetch("data/todolist.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <TodoList list={list} />
      <Input onAdd={onAdd} />
    </div>
  );
}

export default App;
