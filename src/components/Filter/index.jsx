import React from 'react';
import { func, number } from 'prop-types';
import './style.scss';

const Filter = ({ value, onChange, selectedValue }) => (
  <li className="Filter">
    <input
      className="Filter__input"
      type="radio"
      id={`price-${value}`}
      name="contact"
      value={value}
      checked={selectedValue === value}
      onChange={onChange}
    />
    <label className="Filter__label" htmlFor={`price-${value}`}>under ${value}</label>
  </li>
);

Filter.propTypes = {
  value: number.isRequired,
  selectedValue: number.isRequired,
  onChange: func.isRequired,
};

export default Filter;
