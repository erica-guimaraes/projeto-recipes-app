import React, { useEffect, useState } from 'react';
import CardRecipe from '../components/CardRecipe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Drinks() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      const { drinks } = data;
      const firstTwelveRecipes = 12;
      setRecipes(drinks.slice(0, firstTwelveRecipes));
    };

    fetchDrinks();
  }, []);

  console.log(recipes);

  return (
    <div>
      <Header title="Drinks" />
      <SearchBar endpoint="https://www.thecocktaildb.com/api/json/v1/1/" screen="Drinks" />
      <Footer />
      <ul>
        {recipes.map((recipe, index) => (
          <CardRecipe recipe={ recipe } index={ index } key={ recipe.idDrink } />
        ))}
      </ul>
    </div>
  );
}

export default Drinks;
