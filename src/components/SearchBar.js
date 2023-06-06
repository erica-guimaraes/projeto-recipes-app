import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

function SearchBar(props) {
  const { endpoint, screen } = props;
  const { searchInputText } = useContext(Context);
  const [radioSelected, setRadioSelected] = useState('');
  const [recipes, setRecipes] = useState([]);
  const history = useHistory();
  const fetchApi = async () => {
    let responseIngredient;
    let responseName;
    let responseFLetter;
    let data;
    let data1;
    let data2;
    const sorryString = 'Sorry, we haven\'t found any recipes for these filters.';
    switch (radioSelected) {
    case 'Ingredient':
      responseIngredient = await fetch(`${endpoint}filter.php?i=${searchInputText}`);
      data = await responseIngredient.json();
      setRecipes(data[screen.toLowerCase()]);
      if (data[screen.toLowerCase()] === null) {
        global.alert(sorryString);
      }
      console.log(data);
      break;
    case 'Name':
      responseName = await fetch(`${endpoint}search.php?s=${searchInputText}`);
      data1 = await responseName.json();
      try {
        if (data1[screen.toLowerCase()].length === 1) {
          const id = `id${screen.replace('s', '')}`;
          history.push(`/${screen.toLowerCase()}/${data1[screen.toLowerCase()][0][id]}`);
        }
      } catch (error) {
        console.log(error);
      }
      setRecipes(data1[screen.toLowerCase()]);
      if (data1[screen.toLowerCase()] === null) {
        global.alert(sorryString);
      }
      break;
    case 'First Letter':
      if (searchInputText.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        responseFLetter = await fetch(`${endpoint}search.php?f=${searchInputText}`);
        data2 = await responseFLetter.json();
        setRecipes(data2[screen.toLowerCase()]);
        if (data2[screen.toLowerCase()] === null) {
          global.alert(sorryString);
        }
      }
      break;
    default:
      break;
    }
  };

  const recipesString = `str${screen.replace('s', '')}`;
  const magic12 = 12;

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
      {recipes
      && recipes.length > 0
      && recipes.map((recipe, index) => index < magic12
      && (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <p data-testid={ `${index}-card-name` }>{recipe[recipesString]}</p>
          <img
            src={ recipe[`str${screen.replace('s', '')}Thumb`] }
            alt={ recipe[recipesString] }
            data-testid={ `${index}-card-img` }
          />
        </div>
      ))}
    </div>
  );
}

SearchBar.propTypes = {
  endpoint: PropTypes.string.isRequired,
  screen: PropTypes.string.isRequired,
};

export default SearchBar;
