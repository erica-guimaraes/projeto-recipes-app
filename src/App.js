import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';

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
          path="/meals"
          render={ (props) => <Recipes { ...props } /> }
        />
        <Route
          exact
          path="/drinks"
          render={ (props) => <Recipes { ...props } /> }
        />
        <Route
          exact
          path="/profile"
          render={ (props) => <Profile { ...props } /> }
        />
      </Switch>
    </Provider>
  );
}

export default App;
