import React from 'react';

const Checkbox = ({ name, checked, id, handleCheck, value }) => (
    <div className="form-group col-md-6">
        <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            checked={checked}
            onChange={handleCheck}
        />
    </div>
);
export default Checkbox