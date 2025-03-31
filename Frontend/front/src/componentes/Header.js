import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <h1 className="moodify-title">
        <Link to="/main-menu" className="moodify-link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6707/6707113.png"
            alt="Moodify Icon"
            className="moodify-icon"
          />
          MOODIFY
        </Link>
      </h1>
      <div className="user-info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2102/2102633.png"
          alt="Usuario"
          className="user-icon"
        />
      </div>
    </header>
  );
}

export default Header;
