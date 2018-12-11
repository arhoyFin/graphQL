import React from 'react';
import './Block.css';

const Block = (props) => {
    return (
        <div className = "Block__container">
            <div className = "Block__header"> 
                 {props.name}
            </div>
            <div className = "Block__secondary"> 
                 {props.city}
            </div>
            
        </div>
    );
};

export default Block;