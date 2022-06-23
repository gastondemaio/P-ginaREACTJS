import React from 'react'
import { Link } from "react-router-dom";
import cartIcon from "../../assets/one-hamburguer.png"


const CartWidget = () => {
  return (
    <Link to="/cart">
      <img className="cartIcon" src={cartIcon} alt="#" />
    </Link>
  )
}

export default CartWidget