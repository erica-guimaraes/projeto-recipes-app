import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [searchInputText, setSearchInputText] = React.useState('');
  const [listedRecipes, setListedRecipes] = React.useState([]);

  const context = useMemo(() => ({
    searchInputText,
    setSearchInputText,
    listedRecipes,
    setListedRecipes,
  }), [searchInputText, setSearchInputText, listedRecipes, setListedRecipes]);

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
