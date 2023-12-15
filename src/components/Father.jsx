import React from 'react';
import Myself from './Myself';

const Father = ({ring}) => {
    return (
        <div>
            <h1>Father</h1>
            <Myself ring={ring} />
        </div>
    );
};

export default Father;