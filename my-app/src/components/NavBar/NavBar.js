import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements.js';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/inicio">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/inicio" activeStyle>
            Inicio
          </NavLink>
          <NavLink to="/contacto" activeStyle>
            Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/carrito">Carrito</NavBtnLink>
          
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar