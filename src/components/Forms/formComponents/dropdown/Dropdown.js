import React from 'react';

const Dropdown = ({ name, placeholder, values, handleChnage }) => (
    <div>
        <label>{placeholder}</label>
        <select name={name} onChange={handleChnage}>
            <option value="">Select an option</option>
            {
                values.map(values => <option value={values} key={values}>{values}</option>)
            }
        </select>
    </div>
);
export default Dropdown