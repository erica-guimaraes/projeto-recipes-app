import React from 'react';

function CategoryButtons({ categoryName }) {
  return (
    <div>
      <button data-testid={ `${categoryName}-category-filter` }>{ categoryName }</button>
    </div>
  );
}

export default CategoryButtons;
