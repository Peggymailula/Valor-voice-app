import React from 'react';

const Input = ({ label, type, value, onChange, id }) => {
    return (
        <div className="input-container">
            <label style={{ color: "purple" }}>{label}</label>
            <input style={{ height: "8px", padding: "10px", marginLeft: "15px" }} type={type} value={value} onChange={onChange} id={id} />
        </div>
    );
};

export default Input;
