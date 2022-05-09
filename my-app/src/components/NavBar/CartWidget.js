import React from 'react';
import { useState } from 'react';

const CartWidget = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    
  return (
    <div className="cart-widget">
      <div className="qty-display">{count}</div>
      <button onClick={handleClick}>Agregar el producto</button>
    </div>
    );
  }
};

export default CartWidget;