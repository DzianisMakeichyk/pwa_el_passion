import React from 'react';
import { oneOfType, array, string, bool } from 'prop-types';
import Bottle from './../Bottle';
import './style.scss';

const Loader = ({ children, empty, preventLoading }) => (
  <section className="Loader">
    <Bottle empty={empty} loading={!preventLoading} className="Loader__image"/>

    <p className="Loader__text">
      {children ? children : 'Loading...'}
    </p>
  </section>
);

Loader.propTypes = {
  children: oneOfType([array, string]),
  empty: bool,
  preventLoading: bool,
};

export default Loader;
