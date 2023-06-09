import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import Context from './Context';

function Provider({ children }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [filteredRecipes, setFilteredRecipes] = React.useState([]);
  const [searchInputText, setSearchInputText] = React.useState('');
  const [listedRecipes, setListedRecipes] = React.useState([]);
  const location = useLocation().pathname;
  const [loading, setLoading] = React.useState(true);
  const [radioSelected, setRadioSelected] = React.useState('');
  const history = useHistory();
  const screen = location.slice(1).toLowerCase();
  const screenWithoutLowerCase = location.slice(1).replace('s', '');
  const magic3 = 3;
  const URL = location === '/meals' ? 'https://www.themealdb.com/api/json/v1/1' : 'https://www.thecocktaildb.com/api/json/v1/1';

  async function fetchApi() {
    let responseIngredient; let responseName; let responseFLetter; let data; let data1;
    let data2; let response; let data3; const firstTwelveRecipes = 12;
    const sorryString = 'Sorry, we haven\'t found any recipes for these filters.';
    switch (radioSelected) {
    case 'Ingredient':
      responseIngredient = await fetch(`${URL}/filter.php?i=${searchInputText}`);
      data = await responseIngredient.json();
      if (data[screen] === null) {
        global.alert(sorryString);
        break;
      }
      setListedRecipes(data[screen]);
      break;
    case 'Name':
      responseName = await fetch(`${URL}/search.php?s=${searchInputText}`);
      data1 = await responseName.json();
      if (data1[screen] === null) {
        global.alert(sorryString);
        break;
      }
      if (data1[screen].length === 1) {
        const id = `id${screenWithoutLowerCase}`;
        const thirdChar = id.charAt(2).toUpperCase();
        const modifiedId = id.slice(0, 2) + thirdChar + id.slice(magic3);
        history.push(`/${screen}/${data1[screen][0][modifiedId]}`);
      }
      setListedRecipes(data1[screen]);
      break;
    case 'First Letter':
      if (searchInputText.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        responseFLetter = await fetch(`${URL}/search.php?f=${searchInputText}`);
        data2 = await responseFLetter.json();
        if (data2[screen] === null) {
          global.alert(sorryString);
          break;
        }
        setListedRecipes(data2[screen]);
      }
      break;
    default:
      response = await fetch(`${URL}/search.php?s=`);
      data3 = await response.json();
      setListedRecipes(data3[screen].slice(0, firstTwelveRecipes));
      break;
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchApi();
  }, [radioSelected]);

  const context = useMemo(() => ({
    radioSelected,
    setRadioSelected,
    filteredRecipes,
    setFilteredRecipes,
    searchInputText,
    setSearchInputText,
    listedRecipes,
    setListedRecipes,
    loading,
    setLoading,
  }), [searchInputText, setSearchInputText, filteredRecipes, setFilteredRecipes,
    listedRecipes, setListedRecipes, loading, setLoading,
    radioSelected, setRadioSelected]);

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

// Atualizar o nome do estado global "recipes" para listedRecipes e deixa-lo funcional
// No final de cada case do switch do SearchBar, enviar a informação do estado local recipes para o estado global listedRecipes
//
//
