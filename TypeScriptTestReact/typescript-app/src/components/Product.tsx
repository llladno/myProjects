import React, {useState} from 'react';
import {IProducts} from "../models";
interface ProductProps {
    products: IProducts
}
const Product = ({products}: ProductProps) => {

    const [details, setDetails] = useState(false)


    console.log(products)
    return (
        <div className='card'>
            Product!
            <p>{products.title}</p>
            <p>
                Продукт: {products.id}
            </p>
            <p><b>Цена:</b> {products.price}</p>
            <img src={products.image} width='80px'></img>
            <button onClick={()=> setDetails(prev => !prev)}>{details ? 'hide' : 'show'}</button>
            {details && <p>{products.description}</p>}
        </div>
    );
};

export default Product;