import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

function RecipeDetails() {
  const { fetchDetailsById, fetchRecipeById, loading } = useContext(DetailsContext);
  const { id } = useParams();
  const location = useLocation().pathname;

  const [recomendedRecipes, setRecomendedRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecomendedRecipes() {
      const screen = !location.includes('meal') ? 'meals' : 'drinks';
      const URL = screen !== 'drinks' ? 'https://www.themealdb.com/api/json/v1/1' : 'https://www.thecocktaildb.com/api/json/v1/1';
      const response = await fetch(`${URL}/search.php?s=`);
      const data3 = await response.json();
      if (data3[screen] && data3[screen].length > 0) {
        setRecomendedRecipes(data3[screen]);
      }
    }
    fetchDetailsById(id);
    fetchRecomendedRecipes();
  }, []);

  const isDoneRecipe = localStorage.getItem('doneRecipes')
    ? JSON.parse(localStorage.getItem('doneRecipes')).some((recipe) => recipe.id === id)
    : false;

  const magic13 = 13;
  const magic6 = 6;
  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {fetchRecipeById && fetchRecipeById.length > 0
       && fetchRecipeById.map((option, index) => (
         <div key={ index }>
           <Header title={ option.strDrink || option.strMeal } />
           <img
             src={ option.strDrinkThumb || option.strMealThumb }
             alt={ option.strDrink || option.strMeal }
             data-testid="recipe-photo"
           />
           <p data-testid="recipe-title">{option.strDrink || option.strMeal}</p>
           <p data-testid="recipe-category">
             {option.strAlcoholic
               || option.strCategory}
           </p>
           <ul>
             {Object.entries(option).filter((details) => details[0]
               .includes('strIngredient') && details[1])
               .map((entry, indexEntries) => (// entries para pegar o valor sem chamar fetchRecipeById novamente
                 <li
                   key={ entry[1] }
                   data-testid={ `${indexEntries}-ingredient-name-and-measure` }
                 >
                   {entry[1]}
                   {' '}
                   {option[`strMeasure${entry[0].slice(magic13)}`]}
                 </li>
               ))}
           </ul>
           <p data-testid="instructions">{option.strInstructions}</p>
           <iframe
             title="video"
             data-testid="video"
             src={ option.strYoutube }
           >
             Vídeo
           </iframe>

         </div>
       ))}
      <div
        style={ {
          display: 'flex',
          maxWidth: '400px',
          overflowX: 'scroll',
        } }
      >
        {recomendedRecipes && recomendedRecipes.length > 0
        && recomendedRecipes.slice(0, magic6).map((recipe, index) => (
          <div
            data-testid={ `${index}-recommendation-card` }
            key={ index }
            style={ {
              minWidth: '200px',
            } }
          >
            <img
              width="80px"
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt={ recipe.strMeal || recipe.strDrink }
            />
            <p data-testid={ `${index}-recommendation-title` }>
              {recipe.strMeal || recipe.strDrink}
            </p>
          </div>
        ))}
      </div>
      <Footer>
        {!isDoneRecipe && (
          <button
            style={ { position: 'fixed', bottom: '0' } }
            type="button"
            data-testid="start-recipe-btn"
          >
            Start Recipe
          </button>
        )}
      </Footer>
    </div>
  );
}

export default RecipeDetails;
