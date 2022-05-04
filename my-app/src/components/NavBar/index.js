import React from 'react'
import CartWidget from './CartWidget';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/nosotros" activeStyle>
            Nosotros
          </NavLink>
          <NavLink to="/productos" activeStyle>
            Productos
          </NavLink>
          <NavLink to="/contacto" activeStyle>
            Contacto
          </NavLink>
          <NavLink to="/registrarse" activeStyle>
            Registrarse
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="signin">Conectarse</NavBtnLink>
        </NavBtn>
        <CartWidget />
      </Nav>
    </>
  )
}

export default NavBar