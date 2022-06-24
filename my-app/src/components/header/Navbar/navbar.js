import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from '../cartIcon/CartWidget.js';
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <h2>CufaStore</h2>
      <ul className="navbarMenu">
        <li className="navbarItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navbarItem">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navbarItem">
          <CartWidget />
        </li>
      </ul>
    </div>
  )
}

export default NavBar