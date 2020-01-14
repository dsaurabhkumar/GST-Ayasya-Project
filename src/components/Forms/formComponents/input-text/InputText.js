import React from 'react';

const InputText = ({name, placeholder, handleChnage}) => (
    <div>
        <input 
            type="text"
            name={name}
            placeholder={placeholder}
            autoComplete="off"
            onChange={handleChnage}
        />
    </div>
);
export default InputText