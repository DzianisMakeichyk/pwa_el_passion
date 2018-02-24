import React from 'react';
import { string, oneOfType, array, object } from 'prop-types';

const SvgIcon = ({
  className,
  viewBox,
  children,
  ...otherProps
}) => {
  return (
    <svg
      className={className}
      focusable="false"
      viewBox={viewBox}
      aria-hidden
      {...otherProps}
    >
      {children}
    </svg>
  );
};

SvgIcon.propTypes = {
  viewBox: string.isRequired,
  children: oneOfType([
    array,
    object,
  ]).isRequired,
  className: string,
};

export default SvgIcon;
