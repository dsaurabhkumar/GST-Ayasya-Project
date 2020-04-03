import React from 'react';

const Checkbox = ({ name, checked, handleCheck, value }) => (
    <span className="form-group pr-2">
        <input
            type="checkbox"
            name={name}
            value={value}
            checked={checked || ""}
            onChange={handleCheck}
        />
        
    </span>
);
export default Checkbox