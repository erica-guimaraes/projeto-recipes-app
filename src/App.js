import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Provider>
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => <Login { ...props } /> }
        />
        <Route
          exact
          path="/recipes"
          render={ (props) => <Recipes { ...props } /> }
        />
      </Switch>
    </Provider>
  );
}

export default App;
