import React from 'react';
import { number, string, bool } from 'prop-types';
import classNames from 'classnames';
import Star from '../Star';
import './style.scss';

const StarsList = ({
  maxRating,
  className,
  active,
  widthPercentage,
}) => (
  <div
    className={classNames('StarsRating__stars', className)}
    style={{ width: `${widthPercentage}%` }}
  >
    <div className="StarsRating__stars-overflow">
      {[...Array(maxRating)].map((_, i) => (
        <Star
          className="StarsRating__star"
          active={active}
          key={i}
        />
      ))}
    </div>
  </div>
);

const StarsRating = ({
  maxRating,
  rating,
  className,
}) => (
  <div className={classNames('StarsRating__stars-wrapper', className)}>
    <StarsList maxRating={maxRating} />
    <StarsList
      maxRating={maxRating}
      widthPercentage={rating / maxRating * 100}
      className="StarsRating__stars--active"
      active
    />
  </div>
);

StarsList.defaultProps = {
  widthPercentage: 100,
};

StarsList.propTypes = {
  maxRating: number,
  className: string,
  active: bool,
  widthPercentage: number,
};

StarsRating.propTypes = {
  maxRating: number,
  active: bool,
  widthPercentage: number,
};


export default StarsRating;
