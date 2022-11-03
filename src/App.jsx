import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import TodoList from "./TodoList";
import Input from "./Input";

function App() {
  const [list, setList] = useState([]);
  const [state, setState] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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

  const handleListData = (e) => {
    const copyArr = [...list];
    e.target.checked
      ? (copyArr[Number(e.target.name) - 1] = {
          ...copyArr[Number(e.target.name) - 1],
          action: "Completed",
        })
      : (copyArr[Number(e.target.name) - 1] = {
          ...copyArr[Number(e.target.name) - 1],
          action: "Active",
        });
    setList(copyArr);
  };

  const handleListDelete = (e) => {
    const copyArr = [...list];
    copyArr.splice(
      copyArr.indexOf(copyArr.filter((el) => el.id === Number(e.target.id))[0]),
      1
    );

    setList(copyArr);
  };

  const handleDarkMode = () => {
    setDarkMode((pre) => !pre);
    document.body.style.backgroundColor = darkMode ? "#1B2430" : "#fff";
  };

  return (
    <div className="App">
      <Header
        setState={setState}
        darkMode={darkMode}
        handleDarkMode={handleDarkMode}
      ></Header>
      <TodoList
        list={
          state === "Completed"
            ? list.filter((el) => el.action === "Completed")
            : state === "Active"
            ? list.filter((el) => el.action === "Active")
            : list
        }
        state={state}
        handleListData={handleListData}
        handleListDelete={handleListDelete}
        setList={setList}
      />
      <Input onAdd={onAdd} list={list} />
    </div>
  );
}

export default App;
