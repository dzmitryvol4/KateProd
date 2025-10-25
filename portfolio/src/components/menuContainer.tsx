import React from "react";
import "../styles/menuContainer.css";
import { Link } from "react-router-dom";

export class MenuContainer extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="menuContainer">
                <div className="menuItem">
                    <h2><Link to="/">Menu</Link></h2>
                </div>
                <div className="menuItem">
                    <h2><Link to="/about">About me</Link></h2>
                </div>
                <div className="menuItem">
                    <h2><Link to="/projects">Projects</Link></h2>
                </div>
            </div>
            
        );
    }
}