import React from 'react';
import Cousin from './Cousin';

const Uncle = ({ring}) => {
    return (
        <div>
            <h1>Uncle</h1>
            <div className='flex justify-between' style={{gap: '20px'}}>
                <Cousin name={'Rohim'} ring={ring}></Cousin>
                <Cousin name={'Korim'} ring={ring}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;