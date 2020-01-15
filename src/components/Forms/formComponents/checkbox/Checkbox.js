import React from 'react';

const Checkbox = ({name, checked=false, handleChange}) => (
    <div className="form-group col-md-6">
        <input 
            type="checkbox"
            name={name}
            checked={checked}
            onChange={handleChange}
        />
    </div>
);
export default Checkbox