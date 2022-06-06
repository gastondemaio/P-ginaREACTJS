import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {
    const [valoraciones, setValoraciones] = useState(0);
  return (
    <div className='item-container'>
        <h1>Valorá nuestra página</h1>
        <h2>{valoraciones}</h2>
        <button onClick={() => setValoraciones(valoraciones + 1)}>Muy buena la página</button>
        <button onClick={() => setValoraciones(valoraciones - 1)}>No me gustó</button>
    </div>
  )
}

export default ItemCount