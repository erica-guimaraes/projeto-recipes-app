import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Drinks() {
  return (
    <div>
      <Header title="Drinks" />
      <SearchBar endpoint="https://www.thecocktaildb.com/api/json/v1/1/" screen="Drinks" />
      <Footer />
    </div>
  );
}

export default Drinks;
