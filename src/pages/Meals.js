import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Meals() {
  return (
    <div>
      <Header title="Meals" />
      <SearchBar endpoint="https://www.themealdb.com/api/json/v1/1/" screen="Meals" />
      <Footer />
    </div>
  );
}

export default Meals;
