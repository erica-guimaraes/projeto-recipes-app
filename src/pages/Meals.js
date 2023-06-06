import React, { useEffect, useState } from 'react';
import CardRecipe from '../components/CardRecipe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Meals() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      const { meals } = data;
      const firstTwelveRecipes = 12;
      setRecipes(meals.slice(0, firstTwelveRecipes));
    };

    fetchMeals();
  }, []);

  console.log(recipes);

  return (
    <div>
      <Header title="Meals" />
      <SearchBar endpoint="https://www.themealdb.com/api/json/v1/1/" screen="Meals" />
      <Footer />
      <ul>
        {recipes.map((recipe, index) => (
          <CardRecipe recipe={ recipe } index={ index } key={ recipe.idMeal } />
        ))}
      </ul>
    </div>
  );
}

export default Meals;
