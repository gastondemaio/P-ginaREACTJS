import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import trashIcon from '../../../assets/close.png'
import './cart.css'

const Cart = () => {
        const { cart, removeProduct } = useContext(CartContext);

    const calculatePrice = (price, qty) => {
        return price * qty;
    };
return(
    <div className="cartItemsWrapper">
        {cart.length ? (
            cart.map((product) => (
            <div key={product.id} className="cartItem">
                <h2>{product.name}</h2>
                <h4>Qty: {product.qty}</h4>
                <h4>${calculatePrice(product.price, product.qty)}</h4>
                <img
                className="trashIcon"
                src={trashIcon}
                alt="#"
                onClick={() => {
                    removeProduct(product);
                }}
                />
            </div>
            ))
        ) : (
            <h1>No hay items en el carrito</h1>
        )}
        </div>
    )
}

export default Cart