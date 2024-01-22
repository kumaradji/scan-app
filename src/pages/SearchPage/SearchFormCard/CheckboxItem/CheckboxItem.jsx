import React from 'react';

const CheckboxItem = ({ label, checked, onChange }) => (
  <li>
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </li>
);

export default CheckboxItem;
