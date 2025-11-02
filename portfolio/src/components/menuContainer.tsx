import React from "react";
import { useNavigate } from "react-router-dom"; // импортим хук для навигации
import "../styles/menuContainer.css";

export const MenuContainer: React.FunctionComponent = () => {
  const navigate = useNavigate(); // получаем доступ к навигационному объекту

  return (
    <div className="menuContainer">
      <div className="menuItem">
        <button onClick={() => navigate("/")}>
          <h2>Menu</h2>
        </button>
      </div>
      <div className="menuItem">
        <button onClick={() => navigate("/about")}>
          <h2>About Me</h2>
        </button>
      </div>
      <div className="menuItem">
        <button onClick={() => navigate("/projects")}>
          <h2>Projects</h2>
        </button>
      </div>
    </div>
  )
}