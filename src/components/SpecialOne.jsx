import React, { useContext } from 'react';
import { Pearl } from './Grandpa';

const SpecialOne = ({ring}) => {
    const assets = useContext(Pearl);
    // console.log(assets);
    return (
        <div>
            <h1>Special one</h1>
            <p>Ring : {ring}</p>
            <p>Another : {assets}</p>
        </div>
    );
};

export default SpecialOne;