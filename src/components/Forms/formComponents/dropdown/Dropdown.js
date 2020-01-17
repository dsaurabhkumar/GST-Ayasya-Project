import React from 'react';

const Dropdown = ({ name, label, values, handleChange }) => (
    <div>
        <label>{label}</label>
        <select name={name} onChange={handleChange} className="form-control">
            <option value="">Select an option</option>
            {
                values.map(values => <option value={values} key={values}>{values}</option>)
            }
        </select>
    </div>
);
export default Dropdown