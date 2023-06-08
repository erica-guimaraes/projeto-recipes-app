import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SearchBar() {
  const { searchInputText, setRecipes } = useContext(Context);
  const [radioSelected, setRadioSelected] = useState('');

  const fetchApi = async () => {
    switch (radioSelected) {
    case 'Ingredient':
      {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`);
        const data = await response.json();
        setRecipes(data.meals);
      }
      break;
    case 'Name':
      {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`);
        const data = await response.json();
        setRecipes(data.meals);
      }
      break;
    case 'First Letter':
      {
        if (searchInputText.length !== 1) {
          alert('Your search must have only 1 (one) character');
          return;
        }
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`);
        const data = await response.json();
        setRecipes(data.meals);
      }
      break;
    default:
      break;
    }
  };

  return (
    <div>
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          name="search-radio"
          data-testid="ingredient-search-radio"
          onClick={ () => setRadioSelected('Ingredient') }
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          name="search-radio"
          data-testid="name-search-radio"
          onClick={ () => setRadioSelected('Name') }
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          name="search-radio"
          data-testid="first-letter-search-radio"
          onClick={ () => setRadioSelected('First Letter') }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ fetchApi }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
