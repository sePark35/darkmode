import { FaHeart } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="Header-left">
        <FaHeart />
      </div>
      <div className="Header-right">
        <span>All</span>
        <span>Active</span>
        <span>Completed</span>
      </div>
    </div>
  );
};

export default Header;
