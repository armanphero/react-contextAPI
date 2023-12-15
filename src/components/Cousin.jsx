import React, { useContext } from 'react';
import { Pearl } from './Grandpa';

const Cousin = ({name, ring}) => {
    const assets = useContext(Pearl);
    let character;
    if(name === 'Rohim'){
        character = 'Valo';
    }
    else{
        character = 'Bad';
    }
    return (
        <div>
            <h1>Cousin</h1>
            <p>{name}</p>
            <p>Ring : {ring}</p>
            {
                name === 'Rohim' && <p>Assets : {assets}</p>
            }
            {
                name === 'Rohim' || <p>Korimer kisu nai</p>  
            }
            {
                name === 'Rohim' ? <p>Good boy</p> : <p>Bad boy</p>
            }
            <p>Character : {character}</p>
        </div>
    );
};

export default Cousin;