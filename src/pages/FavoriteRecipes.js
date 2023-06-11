import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function FavoriteRecipes() {
  const [urlCopied, setUrlCopied] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState(
    JSON.parse(localStorage.getItem('favoriteRecipes')) || [],
  );

  const copyUrlToClipboard = (recipeId, recipeType) => {
    const url = `${window.location.origin}/${recipeType}s/${recipeId}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        console.log('Link copied!');
        setUrlCopied(true);
      })
      .catch((error) => {
        console.error('Erro ao copiar a URL:', error);
      });

    const copiedMessageTimeLimit = 3000;

    setTimeout(() => {
      setUrlCopied(false);
    }, copiedMessageTimeLimit);
  };

  const removeFavorite = (recipeId) => {
    const newFavorites = favoriteRecipes.filter((recipe) => recipe.id !== recipeId);
    setFavoriteRecipes(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

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
          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.type === 'meal'
              ? `${recipe.nationality} - ${recipe.category}` : recipe.alcoholicOrNot}
          </p>
          <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          <button onClick={ () => copyUrlToClipboard(recipe.id, recipe.type) }>
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="share"
            />
          </button>
          <button onClick={ () => removeFavorite(recipe.id) }>
            <img
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ blackHeartIcon }
              alt="favorite"
            />
          </button>
          { urlCopied && <p>Link copied!</p> }
        </div>
      ))}

      {/* <Footer /> */}
    </div>
  );
}

export default FavoriteRecipes;
