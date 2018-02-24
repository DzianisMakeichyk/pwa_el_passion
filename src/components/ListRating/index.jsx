import React from 'react';
import { number, string } from 'prop-types';
import classNames from 'classnames';
import StarsRating from '../StarsRating';
import './style.scss';

const ListRating = ({ votesCount, rating, className }) => {
  return (
    <div className={classNames('ListRating', className)}>
      <StarsRating maxRating={5} rating={rating} />
      <span className="ListRating__text">
        <span className="ListRating__value">{rating}</span>
        <span className="ListRating__limit">/5 ({votesCount})</span>
      </span>
    </div>
  );
};

ListRating.propTypes = {
  votesCount: number,
  rating: string,
  className: string,
};

export default ListRating;
