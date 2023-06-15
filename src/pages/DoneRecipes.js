import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DoneRecipes() {
  const { doneRecipes } = localStorage.getItem('doneRecipes')
    ? JSON.parse(localStorage.getItem('doneRecipes')) : '';

  return (
    <div>
      <Header title="Done Recipes" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
      {doneRecipes && doneRecipes.map((recipe, index) => (
        <div key={ index }>
          <img
            src={ recipe.image }
            alt={ recipe.name }
            data-testid={ `${index}-horizontal-image` }
          />
          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.type === 'meal'
              ? `${recipe.area} - ${recipe.category}`
              : recipe.alcoholicOrNot}
          </p>
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
          <p data-testid={ `${index}-${recipe.tags[0]}-horizontal-tag` }>
            {recipe.tags[0]}
          </p>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default DoneRecipes;
