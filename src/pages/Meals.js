// import React, { useEffect, useState } from 'react';
// import CardRecipe from '../components/CardRecipe';
// import CategoryButtons from '../components/CategoryButtons';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// import SearchBar from '../components/SearchBar';

// function Meals() {
//   const [recipes, setRecipes] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchMeals = async () => {
//       const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
//       const data = await response.json();
//       const { meals } = data;
//       const firstTwelveRecipes = 12;
//       setRecipes(meals.slice(0, firstTwelveRecipes));
//     };

//     const fetchMealsCategories = async () => {
//       const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
//       const data = await response.json();
//       const { meals } = data;
//       const firstFiveCategories = 5;
//       const category = meals.map((meal) => meal.strCategory)
//         .slice(0, firstFiveCategories);
//       setCategories(category);
//     };

//     fetchMeals();
//     fetchMealsCategories();
//   }, []);

//   console.log(recipes);

//   return (
//     <div>
//       <Header title="Meals" />
//       <SearchBar endpoint="https://www.themealdb.com/api/json/v1/1/" screen="Meals" />
//       <ul>
//         {categories.map((category) => (
//           <CategoryButtons categoryName={ category } key={ category } />
//         ))}
//       </ul>
//       <ul>
//         {recipes.map((recipe, index) => (
//           <CardRecipe recipe={ recipe } index={ index } key={ recipe.idMeal } />
//         ))}
//       </ul>
//       <Footer />
//     </div>
//   );
// }

// export default Meals;
