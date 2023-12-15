import React from 'react';
import SpecialOne from './SpecialOne';

const Myself = ({ring}) => {
    return (
        <div>
            <h1>Myself</h1>
            <SpecialOne ring={ring} />
        </div>
    );
};

export default Myself;