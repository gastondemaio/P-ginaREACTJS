import React, {useEffect, useState, TextField} from 'react'
import axios from 'axios';
import './ItemList.css'

import { Link } from 'react-router-dom';

import ItemCard from '../ItemCard/ItemCard'
import Spinner from '../Spinner/Spinner';

const ItemList = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [value, setValue] = useState(' ')

	const onChangeValue = (e) => {
		setValue(e.target.value);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		const productInput =  value.toLowerCase().replace(/ /g, '');
		if(productInput) {
			useEffect(() => {
				fetch(`../mocks/productos.json/${id}`).then((res) =>
					setItems(res.data)
				);
				setTimeout(() => {
					setIsLoading(false);
				}, 1500);
			}, []);
		}
	}
	

	return (
		<div>
			<div>
        		<form className='Form' onSubmit={onSubmit}>
          			<TextField
          				placeholder='Buscar Comida'
          				variant='outlined'
          				className='TextField'
          				value={value}
          				onChange={onChangeValue}
          			/>
          			<button className='btn'>Buscar</button>
        		</form>
      		</div>
			{isLoading ? (
					<Spinner />
				) : (
			<div className='ItemList-container'>
				{items.map((item) => {
					return (
						<div key={item.id}>
							<Link to={`/details/${item.id}`}
							style={{ textDecoration: 'none' }}>
							<ItemCard data={item} />
							</Link>
						</div>
					);
				})}
			</div>
			)}
		</div>
	)
	}

	export default ItemList