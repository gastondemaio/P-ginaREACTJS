import React from 'react'
import { useState } from 'react'
import Item from './Item/Item'


const Items = () => {
    const [items, setItems] = useState([
      {
        id: 1,
        nombre: "Hamburguesa Picante",
        img: "https://espanol.kingsford.com/wp-content/uploads/2017/02/KFD_SpicyBBQBaconRanchBurger35382_WEB.jpg",
      },
      {
        id: 2,
        nombre: 'Hamburguesa Cheddar',
        img: "https://i0.wp.com/www.buenosbares.com/wp-content/uploads/2021/04/MOSTAZA_-MEGA-BOOM_1.jpg?resize=1050%2C1312",
      },
      {
        id: 3,
        nombre: 'Hamburguesa Vegana',
        img: "https://i.blogs.es/ea015e/hamburguesas-veganas-alubias-nueces/1366_2000.jpg",
      },
    ]);

  return (
    <div className='row'>
      {items.map((item) => {
        return <Item nombre={item.nombre} img={item.img} />
      })}
    </div>
  )
};

export default Items;