import React from 'react';
import Product from './Product';

const Cart = ({orderedProducts, removeProducts}) => {
    // console.log(orderedProducts);
    return (
        <div>
            <h1>Order Summary</h1>
            {
                orderedProducts.map(product => <Product key={product._id} product={product} removeProducts={removeProducts} ></Product>)
            }
        </div>
    );
};

export default Cart;