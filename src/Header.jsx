import React from "react";
import "./Header.css"; // Make sure this path matches your file structure
import Yo2 from './img/yo2xd.jpg'

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo">
        <img src={Yo2} alt="Logo" style={{width: '80px', height: '80px', borderRadius: '50%'}}/>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skillset">Skillset</a>
      </nav>
    </header>
  );
}