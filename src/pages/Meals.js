import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Meals() {
  return (
    <div>
      <Header title="Meals" />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default Meals;
