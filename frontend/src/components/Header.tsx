import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <h1 className="title">My Product Store</h1>
      <nav className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/product">
          Products
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
