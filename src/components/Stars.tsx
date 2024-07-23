import React from 'react';
import Star from './Star';

interface StarsProps {
  count?: number;
}

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
    return null;
  }

  const starsElements = Array.from({ length: count }).map((_, i) => (
    <Star key={i} />
  ));

  return (
    <ul className="card-body-stars u-clearfix">
      {starsElements}
    </ul>
  );
};

export default Stars;
