import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import TShirt from './tShirt';
import Cart from './Cart';

const Home = () => {
    const tShirtsStringify = useLoaderData();
    const tShirts = JSON.parse(tShirtsStringify)
    const [orderedProducts, setOrderedProducts] = useState([]);
    // console.log(tShirts);
    const addProducts = (id) => {
        const isExisted = orderedProducts.find(shirt => shirt._id === id);
        if(isExisted){
            toast('Already added this product');
            return;
        }
        const newProduct = tShirts.find(shirt => shirt._id === id);
        setOrderedProducts([...orderedProducts, newProduct]);
    }
    const removeProducts = (id) => {
        const remaining = orderedProducts.filter(shirt => shirt._id !== id);
        setOrderedProducts(remaining)
    }
    return (
        <div className='home my-container'>
            <div className='tshirts-section'>
                <h1>{tShirts.length} Products found</h1>
                <div className='tshirts-container'>
                    {
                        tShirts.map(shirt => <TShirt shirt={shirt} key={shirt._id} addProducts={addProducts}></TShirt>)
                    }
                </div>
            </div>
            <div className='cart-section'>
                <Cart orderedProducts={orderedProducts} removeProducts={removeProducts} />
            </div>
        </div>
    );
};

export default Home;