import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

  return (
    <div>
      <Header title="Favorite Recipes" />
      <button data-testid="filter-by-all-btn">All</button>
      <button data-testid="filter-by-meal-btn">Meals</button>
      <button data-testid="filter-by-drink-btn">Drinks</button>

      {favoriteRecipes.map((recipe, index) => (
        <div key={ recipe.id }>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ recipe.image }
            alt="recipe"
          />
          <p data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</p>
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          <button data-testid={ `${index}-horizontal-share-btn` }>compartilhar</button>
          <button data-testid={ `${index}-horizontal-favorite-btn` }>compartilhar</button>
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default FavoriteRecipes;
