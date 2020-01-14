import React from 'react';

const Radio = ({name, handleChnage}) => (
    <div>
        <input 
            type="radio"
            name={name}
            onChange={handleChnage}
        />
    </div>
);
export default Radio