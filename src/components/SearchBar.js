import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/Context';

function SearchBar() {
  const { searchInputText, recipes, setRecipes } = useContext(Context);
  const [radioSelected, setRadioSelected] = useState('');

  useEffect(() => {
    console.log(radioSelected);
  }, [radioSelected]);

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
        onClick={ () => fetchApi() }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
