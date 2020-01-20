import React from 'react';

const Checkbox = ({ name, checked, handleCheck, value }) => (
    <div className="form-group col-md-6">
        <input
            type="checkbox"
            name={name}
            value={value}
            checked={checked || ""}
            onChange={handleCheck}
        />
    </div>
);
export default Checkbox