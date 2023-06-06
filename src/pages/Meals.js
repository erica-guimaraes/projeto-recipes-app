import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Meals() {
  useEffect(() => {
    try{
      const fetchMeals = async () => {
        await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      }
    }

  }, []);

  return (
    <div>
      <Header title="Meals" />
      <SearchBar endpoint="https://www.themealdb.com/api/json/v1/1/" screen="Meals" />
      <Footer />
    </div>
  );
}

export default Meals;
