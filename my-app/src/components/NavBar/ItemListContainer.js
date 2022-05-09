import React from "react";
import { useState } from 'react';

function ItemListContainer(){
    const products = ["Hamburguesa Picante", "Hamburguesa Vegana", "Hamburguesa Cheddar"]
    const productList = products.map(product => <h2>{product}</h2>)

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return  (
        <div>
            {productList}
            <div>
                <button onClick={handleClick}>Agregar el producto</button>
            </div>
        </div>
    )
}

export default ItemListContainer