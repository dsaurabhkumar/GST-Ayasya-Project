import React from 'react';

const Radio = ({name, handleChange}) => (
    <div className="form-group col-md-6">
        <input 
            type="radio"
            name={name}
            onChange={handleChange}
        />
    </div>
);
export default Radio