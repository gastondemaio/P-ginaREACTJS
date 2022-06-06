import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import './ItemDetails.css';

import ItemCard from '../../components/ItemCard/ItemCard';

const ItemDetails = () => {
  let { id } = useParams();

  console.log('USE PARAMS:', id);

  const [items, setItems] = useState([]);

  useEffect(() => {
		axios(`https://breakingbadapi.com/api/characters/${id}`).then((res) =>
			setItems(res.data)
		);
	}, [id]);
  return (
    <div className='ItemList-detail'>
			{items.map((item) => {
				return (
					<div key={item.id}>
						<ItemCard data={item} />
					</div>
				);
			})}
		</div>
  )
}

export default ItemDetails