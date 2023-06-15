import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SearchBar() {
  const { setRadioSelected } = useContext(Context);
  const [selectedRadio, setSelectedRadio] = useState('');

  const handleSearch = () => {
    setRadioSelected(selectedRadio);
  };

  return (
    <div>
      <label htmlFor="ingredient-search-radio">
        Ingredient
        <input
          type="radio"
          name="search-radio"
          data-testid="ingredient-search-radio"
          value="Ingredient"
          onChange={ (e) => setSelectedRadio(e.target.value) }
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          name="search-radio"
          data-testid="name-search-radio"
          value="Name"
          onChange={ (e) => setSelectedRadio(e.target.value) }
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          name="search-radio"
          data-testid="first-letter-search-radio"
          value="First Letter"
          onChange={ (e) => setSelectedRadio(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSearch }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
