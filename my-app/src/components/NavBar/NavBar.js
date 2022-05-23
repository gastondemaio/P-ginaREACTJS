import React from 'react'
import '../css/NavBar.css'
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
          <NavLink to="/Nosotros" activeStyle>
            Nosotros
          </NavLink>
          <NavLink to="/PokeDetails" activeStyle>
            Pokes
          </NavLink>
          <NavLink to="/contacto" activeStyle>
            Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/carrito'>Carrito <img className='carritoImg' src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1653258525~exp=1653259125~hmac=96f73d215a5b8bc6f8e1856b5edb3b468082ebe24aaa9f5cc28010b90b1ae2a8"/></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default NavBar