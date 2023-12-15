import React from 'react';

const Product = ({product, removeProducts}) => {
    const {name, picture, _id} = product;
    // console.log(product);
    return (
        <div className='product'>
            <img src={picture} alt="product img" />
            <h5>{name}</h5>
            <button onClick={() => removeProducts(_id)} title='delete product'>❌</button>
        </div>
    );
};

export default Product;