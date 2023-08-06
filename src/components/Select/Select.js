import React from 'react';
import "./Select.css"

const Select = ({ label, options, value, onChange }) => {
    return (
        <div className="select-container">
            <label style={{ color: "purple" }}>{label}</label>
            <select
                value={value}
                onChange={onChange}
                className="custom-select" // Add a custom CSS class
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
