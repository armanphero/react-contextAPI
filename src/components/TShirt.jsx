import React from 'react';

const TShirt = ({shirt, addProducts}) => {
    // console.log(shirt);
    const {picture, name, gender, price, _id} = shirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <div className='tshirt-details'>
                <h2>{name}</h2>
                <p>Gender : {gender}</p>
                <p>Price : ${price}</p>
                <button className="button-9" role="button" onClick={() => addProducts(_id)}>Buy Now</button>
            </div>
        </div>
    );
};

export default TShirt;