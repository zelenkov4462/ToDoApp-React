import React from "react";

const Select = ({ defaultValue, options, value, onChange }) => {
  return (
    <select
      style={{ margin: "10px" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
