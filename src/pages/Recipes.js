import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Context from '../context/Context';

function Recipes() {
  const { searchInputText,
    listedRecipes, setListedRecipes, setSearchInputText } = useContext(Context);
  const location = useLocation().pathname;
  console.log(location);

  useEffect(() => {
    let URL = '';
    URL = location === '/meals' ? 'https://www.themealdb.com/api/json/v1/1/search.php?s=' : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListedRecipes(location === '/meals' ? data.meals : data.drinks);
      });
  }, [location, setListedRecipes]);

  const limitResults = 12;

  return (
    <div>
      {location === '/meals' ? <Header title="Meals" /> : <Header title="Drinks" />}
      <SearchBar
        searchInputText={ searchInputText }
        setSearchInputText={ setSearchInputText }
      />
      <ul>
        {listedRecipes.slice(0, limitResults).map((recipe, index) => (
          <div key={ index } data-testid={ `${index}-recipe-card` }>
            <li key={ recipe.idMeal || recipe.idDrink }>
              <p data-testid={ `${index}-card-name` }>
                {location === '/meals' ? recipe.strMeal : recipe.strDrink}
              </p>
            </li>
            <img
              src={ location === '/meals' ? recipe.strMealThumb : recipe.strDrinkThumb }
              alt={ location === '/meals' ? recipe.strMeal : recipe.strDrink }
              data-testid={ `${index}-card-img` }
            />
          </div>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default Recipes;
