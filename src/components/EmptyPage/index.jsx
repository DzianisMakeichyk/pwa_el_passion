import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import Loader from '../Loader';

const EmptyPage =({ location }) => (
  <Loader empty>
    Path '{location.pathname}' seems to be <strong>empty</strong>.<br />
    Time to <Link to="/" className="Loader__link">go home &rsaquo;</Link>
  </Loader>
);

EmptyPage.propTypes = {
  location: shape({
    pathname: string,
  }).isRequired,
};

export default EmptyPage;
