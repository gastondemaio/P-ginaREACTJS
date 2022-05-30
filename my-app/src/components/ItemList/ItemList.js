import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './ItemList.css'

import { Link } from 'react-router-dom';

import ItemCard from '../ItemCard/ItemCard'

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios('https://breakingbadapi.com/api/characters').then((res) =>
			setItems(res.data)
		);
  }, [])

  return (
    <div>
      <div className='ItemList-container'>
					{items.map((item) => {
						return (
							<div key={item.char_id}>
								<Link
									to={`/details/${item.char_id}`}
									style={{ textDecoration: 'none' }}
								>
									<ItemCard data={item} />
								</Link>
							</div>
						);
					})}
				</div>
    </div>
  )
}

export default ItemList