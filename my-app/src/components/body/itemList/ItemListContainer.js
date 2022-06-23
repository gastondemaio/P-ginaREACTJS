import React from 'react'
import { useEffect, useState } from 'react'
import { ItemList } from './ItemList'
import { productsMock } from '../mock/productsMock'
import Spinner from '../../Spinner/Spinner'
import './itemList.css'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = new Promise((res, rej) => {
        setTimeout(function () {
            res(productsMock)
        }, 2000);
    });

    useEffect(() => {
        setIsLoading(true);
        getProducts
          .then((res) => setProducts(res))
          .catch((err) => alert(err))
          .finally(() => setIsLoading(false));
      }, []);

  return (
    <>
    {isLoading ? <Spinner/> : <ItemList products={products}/>}    
    </>
  )
}

export default ItemListContainer