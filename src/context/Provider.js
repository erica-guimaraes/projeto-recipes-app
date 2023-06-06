import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [searchInputText, setSearchInputText] = React.useState('');

  const context = useMemo(() => ({
    searchInputText,
    setSearchInputText,
  }), [searchInputText, setSearchInputText]);

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
