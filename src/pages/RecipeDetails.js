import React, { useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

function RecipeDetails() {
  const { fetchDetailsById, fetchRecipeById, loading } = useContext(DetailsContext);
  const { id } = useParams();
  const location = useLocation().pathname;
  useEffect(() => {
    fetchDetailsById(id);
  }, [location]);

  const magic10 = 10;
  const magic13 = 13;
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
             {Object.entries(option).map((entry, indexEntries) => { // entries para pegar o valor sem chamar fetchRecipeById novamente
               if (
                 entry[0].startsWith('strIngredient') // keys estavam diferentes, buscando semelhantes
                   && entry[1] !== null && entry[1] !== '' // removendo ingredientes vazios
               ) {
                 const ingredientIndex = indexEntries + 1 - magic10; // gambiarra para pegar o index do ingrediente
                 return (
                   <li
                     key={ entry[1] }
                     data-testid={ `${ingredientIndex}-ingredient-name-and-measure` }
                   >
                     {entry[1]}
                     {' '}
                     {option[`strMeasure${entry[0].slice(magic13)}`]}
                   </li>
                 );
               }
               return null;
             })}
           </ul>
           <p data-testid="instructions">{option.strInstructions}</p>
         </div>

       ))}
      <Footer />
    </div>
  );
}

export default RecipeDetails;
