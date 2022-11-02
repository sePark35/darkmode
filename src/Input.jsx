import { useState } from "react";
import "./Input.css";

const Input = ({ onAdd }) => {
  const [content, setContent] = useState({
    data: "",
    id: "",
  });

  const handleContent = (e) => {
    setContent({
      [e.target.name]: e.target.value,
      id: new Date().getTime(),
    });
  };
  const handleSubmit = () => {
    onAdd(content.data, content.id);
    setContent({ data: "", id: "" });
  };

  return (
    <div className="Input">
      <input
        id={content.id}
        type="text"
        name="data"
        value={content.data}
        placeholder="Add Todo"
        onChange={handleContent}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Input;
