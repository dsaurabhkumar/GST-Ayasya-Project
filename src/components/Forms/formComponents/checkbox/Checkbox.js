import React from 'react';

const Checkbox = ({name, checked, id, handleCheck}) => (
    <div className="form-group col-md-6">
        <input 
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={handleCheck}
        />
    </div>
);
export default Checkbox