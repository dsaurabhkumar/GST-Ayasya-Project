import React from 'react';

const Radio = ({name, value, checked, handleChange}) => (
    <div className="">
        <input 
            type="radio"
            name={name}
            value={value}
            checked={checked || ''}
            onChange={handleChange}
        />
    </div>
);
export default Radio