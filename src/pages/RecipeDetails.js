import React, { useContext, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import Footer from '../components/Footer';

function RecipeDetails() {
  const { fetchDetailsById, fetchRecipeById, loading } = useContext(DetailsContext);
  const { id } = useParams();
  const location = useLocation().pathname;
  // console.log(globalRecipeId);
  useEffect(() => {
    fetchDetailsById(id);
  }, [location]);

  // console.log(fetchRecipeById)

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {fetchRecipeById && fetchRecipeById.length > 0
       && fetchRecipeById.map((option, index) => (
         <p key={ index }>{option.strDrink || option.strMeal}</p>
       ))}
      <Footer />
    </div>
  );
}

export default RecipeDetails;
