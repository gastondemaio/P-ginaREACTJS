import React from "react";

function ItemListContainer(){
    const products = ["Hamburguesa Picante", "Hamburguesa Vegana", "Hamburguesa Cheddar"]
    const productList = products.map(product => <h2>{product}</h2>)

    return  (
        <div>
            {productList}
            
        </div>
    )
}

export default ItemListContainer