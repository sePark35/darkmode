import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import HeaderRight from "./HeaderRight";
import "./Header.css";

const Header = ({ setState, darkMode, handleDarkMode }) => {
  const [checked, setChecked] = useState("All");

  const toggleChecked = (text) => {
    setChecked(text);
    setState(text);
  };

  return (
    <div className="Header">
      <div className="Header-left" onClick={handleDarkMode}>
        <FaHeart style={darkMode ? "" : { color: "#1B2430" }} />
      </div>
      <div className="Header-right">
        <HeaderRight text={"All"} checked={checked} onClick={toggleChecked} />
        <HeaderRight
          text={"Active"}
          checked={checked}
          onClick={toggleChecked}
        />
        <HeaderRight
          text={"Completed"}
          checked={checked}
          onClick={toggleChecked}
        />
      </div>
    </div>
  );
};

export default Header;
