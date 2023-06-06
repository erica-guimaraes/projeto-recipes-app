import React, { useState, useContext } from 'react';
import Context from '../context/Context';

function SearchBar() {
  const { searchInputText } = useContext(Context);
  const [radioSelected, setRadioSelected] = useState('');
  const fetchApi = async () => {
    let responseIngredient;
    let responseName;
    let responseFLetter;
    let data;
    let data1;
    let data2;
    console.log(searchInputText);
    switch (radioSelected) {
    case 'Ingredient':
      responseIngredient = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`);
      data = await responseIngredient.json();
      console.log(data);
      break;
    case 'Name':
      responseName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`);
      data1 = await responseName.json();
      console.log(data1);
      break;
    case 'First Letter':
      if (searchInputText.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        responseFLetter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputText}`);
        data2 = await responseFLetter.json();
        console.log(data2);
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
        onClick={ () => fetchApi() }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
