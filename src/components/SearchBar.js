import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
      />
      <label htmlFor="ingredient-search-radio">
        Ingredient

        <input
          type="radio"
          name="search-radio"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-search-radio">
        Name
        <input
          type="radio"
          name="search-radio"
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        First Letter
        <input
          type="radio"
          name="search-radio"
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
