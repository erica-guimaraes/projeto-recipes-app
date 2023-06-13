import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Context from '../context/Context';

function Recipes() {
  const {
    searchInputText,
    listedRecipes,
    setListedRecipes,
    setSearchInputText,
    loading,
    listedCategories,
    // setListedCategories,
    fetchRecipesByCategory,
    setToggleAllClick,
    toggleAllClick,
    actualCateg,
    setActualCateg,
  } = useContext(Context);
  const history = useHistory();
  const location = useLocation().pathname;
  const limitResults = 12;
  const limitCategButtons = 5;
  // console.log(listedRecipes);

  function handleToggleAll() {
    if (toggleAllClick === true) {
      setToggleAllClick(false);
    }
    setToggleAllClick(true);
  }

  function handleButtonCategory(strCategory) {
    console.log(listedRecipes.strCategory);
    if (actualCateg.length === 0 || strCategory !== actualCateg) {
      setActualCateg(strCategory);
      fetchRecipesByCategory(strCategory);
      return;
    }
    setActualCateg([]);
    handleToggleAll();
  }

  function handleRedirect(idRecipe) {
    history.push(`${location}/${idRecipe}`);
  }

  return (
    <div>
      {location === '/meals' ? <Header title="Meals" /> : <Header title="Drinks" />}
      <SearchBar
        searchInputText={ searchInputText }
        setSearchInputText={ setSearchInputText }
        setListedRecipes={ setListedRecipes }
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul>
            <button
              data-testid="All-category-filter"
              onClick={ handleToggleAll }
            >
              All
            </button>
            {listedCategories.meals
             && listedCategories.meals.slice(0, limitCategButtons)
               .map((categButtons, index) => (
                 <div key={ index }>
                   <button
                     data-testid={ `${categButtons.strCategory}-category-filter` }
                     onClick={ () => handleButtonCategory(categButtons.strCategory) }
                   >
                     {categButtons.strCategory}
                   </button>
                 </div>
               ))}
            {listedCategories.drinks
             && listedCategories.drinks.slice(0, limitCategButtons)
               .map((categButtons, index) => (
                 <div key={ index }>
                   <button
                     data-testid={ `${categButtons.strCategory}-category-filter` }
                     onClick={ () => handleButtonCategory(categButtons.strCategory) }
                   >
                     {categButtons.strCategory}
                   </button>
                 </div>
               ))}
          </ul>
          <ul>
            {listedRecipes.length > 0
               && listedRecipes.slice(0, limitResults)
                 .map((recipe, index) => (
                   <div key={ index } data-testid={ `${index}-recipe-card` }>
                     <button
                       onClick={ () => handleRedirect(recipe.idMeal || recipe.idDrink) }
                     >
                       <li key={ recipe.idMeal || recipe.idDrink }>
                         <p data-testid={ `${index}-card-name` }>
                           {location === '/meals' ? recipe.strMeal : recipe.strDrink}
                         </p>
                       </li>
                       <img
                         width="200px"
                         src={ location === '/meals' ? recipe.strMealThumb
                           : recipe.strDrinkThumb }
                         alt={ location === '/meals' ? recipe.strMeal : recipe.strDrink }
                         data-testid={ `${index}-card-img` }
                       />
                     </button>
                   </div>
                 ))}
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Recipes;
