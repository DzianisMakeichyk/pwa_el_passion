import React from 'react';
import classNames from 'classnames';
import { bool, string } from 'prop-types';
import BottleSvg from '../../svg-components/Bottle';
import './style.scss';

const Bottle = ({ empty, loading, className }) => {
  const classList = classNames(className, 'Bottle', {
    'Bottle--empty': empty,
    'Bottle--loading': !empty && loading,
  });

  return <BottleSvg className={classList} />;
};

Bottle.propTypes = {
  empty: bool,
  loading: bool,
  className: string,
};

export default Bottle;
