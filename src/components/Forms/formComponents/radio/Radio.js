import React from 'react';

const Radio = ({checked = true, value, handleChange}) => (
    <div className="">
        <input 
            type="radio"
            name="radio-btns"
            value={value}
            checked={checked}
            onChange={handleChange}
        />
    </div>
);
export default Radio