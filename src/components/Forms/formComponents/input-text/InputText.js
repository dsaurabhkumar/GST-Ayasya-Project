import React from 'react';

const InputText = ({name, label, placeholder, handleChange}) => (
    <div className="form-group col-md-6">
    <label>{label}</label>
        <input 
            type="text"
            className="form-control"
            name={name}
            placeholder={placeholder}
            autoComplete="off"
            onChange={handleChange}
        />
    </div>
);
export default InputText