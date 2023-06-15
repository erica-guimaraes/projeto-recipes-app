import React from 'react';
import PropTypes from 'prop-types';

function CategoryButtons({ categoryName }) {
  return (
    <div>
      <button data-testid={ `${categoryName}-category-filter` }>{ categoryName }</button>
    </div>
  );
}

CategoryButtons.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default CategoryButtons;
