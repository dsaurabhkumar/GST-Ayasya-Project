import React from 'react';

const Checkbox = ({name, checked=false, handleChnage}) => (
    <div>
        <input 
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleChnage}
        />
    </div>
);
export default Checkbox