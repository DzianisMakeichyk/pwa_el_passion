import React from 'react';
import classNames from 'classnames';
import { arrayOf, number, func } from 'prop-types';
import Filter from './../Filter';
import './style.scss';

class Filters extends React.PureComponent {
  onChange = (e) => {
    this.props.onFilterChange(parseInt(e.target.value, 10));
  }

  render() {
    const { levels, selectedValue } = this.props;

    const listClasses = classNames('Filters', this.props.className);
    const clearButtonClasses = classNames('Filters__clear', {
      'Filters__clear--visible': selectedValue,
    });

    return (
      <ul className={listClasses}>
        {levels.map((value, index) => (
          <Filter
            key={index}
            value={value}
            onChange={this.onChange}
            selectedValue={selectedValue}
          />
        ))}

        <li>
          <button
            aria-label="filter"
            className={clearButtonClasses}
            onClick={this.onChange}
          />
        </li>
      </ul>
    );
  }
}

Filters.propTypes = {
  levels: arrayOf(number),
  onFilterChange: func,
  selectedValue: number,
};

export default Filters;
