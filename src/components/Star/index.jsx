import React from 'react';
import { string, bool, number } from 'prop-types';
import classNames from 'classnames';
import './style.scss';

const Star = ({ className, active, size }) => {
  const classList = classNames(className, 'Star', {
    'Star--active': active,
  });

  return (
    <svg
      className={classList}
      width={size}
      height={size}
      viewBox="0 0 11 11"
    >
      <polygon
        fill="currentColor"
        fillRule="evenodd"
        points="5.5 9.121 2.101 11 2.75 7.02 0 4.202 3.8 3.621 5.5 0 7.2 3.621 11 4.202 8.25 7.02 8.899 11"
      />
    </svg>
  );
};

Star.defaultProps = {
  size: 12,
};

Star.propTypes = {
  className: string,
  active: bool,
  size: number,
};

export default Star;
