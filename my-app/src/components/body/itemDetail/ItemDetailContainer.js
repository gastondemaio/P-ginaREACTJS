import React from 'react'
import { useEffect, useState } from "react";
import "./itemDetail.css";
import Spinner from '../../Spinner/Spinner';
import { ItemDetail } from "./ItemDetail";
import { productsMock } from "../mock/productsMock";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = new Promise((res, rej) => {
        setTimeout(function () {
        res(productsMock);
        }, 2000);
    });

    useEffect(() => {
    setIsLoading(true);
    getProducts
        .then((res) => {
            res.forEach((item) => {
                if (item.id === id) {
                    setProduct(item);
                }
            });
        })
        .catch((err) => alert(err))
        .finally(() => setIsLoading(false));
        }, []);

    return (
        <div className="itemDetailWrapper">
            {isLoading ? <Spinner /> : <ItemDetail product={product} />}
        </div>
    )
}
export default ItemDetailContainer;