import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          ИП Аджикурманова К. А.
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list__item">
              <Link to="/about" className="header__nav-list__item-link">О нас</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
