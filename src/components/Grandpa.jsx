import React, { createContext } from 'react';
import Father from './Father';
import Uncle from './Uncle';

export const Pearl = createContext('');
const Grandpa = () => {
    const ring = 'diamond';
    const familyAssets = 'gold, hira'
    return (
        <Pearl.Provider value={familyAssets}>
            <div className='grandpa'>
                <h1>Grandpa</h1>
                <div className='flex justify-between' style={{ gap: '20px' }}>
                    <Father ring={ring} />
                    <Uncle ring={ring} />
                </div>
            </div>
        </Pearl.Provider>
    );
};

export default Grandpa;