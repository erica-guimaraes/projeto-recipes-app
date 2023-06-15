// import React, { useEffect, useState } from 'react';
// import CardRecipe from '../components/CardRecipe';
// import CategoryButtons from '../components/CategoryButtons';
// import Footer from '../components/Footer';
// import Header from '../components/Header';
// import SearchBar from '../components/SearchBar';

// function Drinks() {
//   const [recipes, setRecipes] = useState([]);
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchDrinks = async () => {
//       const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
//       const data = await response.json();
//       const { drinks } = data;
//       const firstTwelveRecipes = 12;
//       setRecipes(drinks.slice(0, firstTwelveRecipes));
//     };

//     const fetchDrinksCategories = async () => {
//       const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
//       const data = await response.json();
//       const { drinks } = data;
//       const firstFiveCategories = 5;
//       const category = drinks.map(
//         (drink) => drink.strCategory,
//       ).slice(0, firstFiveCategories);
//       setCategories(category);
//     };

//     fetchDrinks();
//     fetchDrinksCategories();
//   }, []);

//   console.log(recipes);
//   console.log(categories);

//   return (
//     <div>
//       <Header title="Drinks" />
//       <SearchBar endpoint="https://www.thecocktaildb.com/api/json/v1/1/" screen="Drinks" />
//       <ul>
//         {categories.map((category) => (
//           <CategoryButtons categoryName={ category } key={ category } />
//         ))}
//       </ul>
//       <ul>
//         {recipes.map((recipe, index) => (
//           <CardRecipe recipe={ recipe } index={ index } key={ recipe.idDrink } />
//         ))}
//       </ul>
//       <Footer />
//     </div>
//   );
// }

// export default Drinks;
