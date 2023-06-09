import React from 'react';
import PropTypes from 'prop-types';

function CardRecipe({ recipe, index }) {
  const recipeName = recipe.strMeal || recipe.strDrink;
  const recipeThumb = recipe.strMealThumb || recipe.strDrinkThumb;

  return (
    <div data-testid={ `${index}-recipe-card` }>
      <p
        data-testid={ `${index}-card-name` }
      >
        {recipeName}
      </p>
      <img
        src={ recipeThumb }
        alt={ recipe.strMeal }
        data-testid={ `${index}-card-img` }
      />
    </div>
  );
}

CardRecipe.propTypes = {
  recipe: PropTypes.shape({
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CardRecipe;
