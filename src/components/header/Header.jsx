import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
        <b>Аптека у Юлии</b>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list__item">
              <Link to="/" className="header__nav-list__item-link">Главная</Link>
            </li>
            <li className="header__nav-list__item">
              <Link to="/catalog" className="header__nav-list__item-link">Каталог</Link>
            </li>  
            <li className="header__nav-list__item">
              <Link to="/contacts" className="header__nav-list__item-link">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
