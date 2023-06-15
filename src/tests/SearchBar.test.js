<<<<<<< HEAD
import { getByText, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
// import { act } from 'react-dom/test-utils';
import SearchBar from '../components/SearchBar';

describe('Testando SearchBar component', () => {
  it('Verifica se ao clicar em profile, é levado para o path correto', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={ history }>
        <SearchBar />
      </Router>,
    );
    const ingredientRadio = getByTestId('ingredient-search-radio');
    expect(ingredientRadio).toBeInTheDocument();
    const ingredientLabel = getByText('Ingredient');
    expect(ingredientLabel).toBeInTheDocument();
  });
});
=======
// import { getByText, render, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { createMemoryHistory } from 'history';
// import { Router } from 'react-router-dom';
// // import { act } from 'react-dom/test-utils';
// import SearchBar from '../components/SearchBar';

// describe('Testando SearchBar component', () => {
//   it('Verifica se ao clicar em profile, é levado para o path correto', () => {
//     const history = createMemoryHistory();
//     // const { getByTestId } =
//     render(
//       <Router history={ history }>
//         <SearchBar />
//       </Router>,
//     );
//     const ingredientRadio = getByTestId('ingredient-search-radio');
//     expect(ingredientRadio).toBeInTheDocument();
//     const ingredientLabel = getByText('Ingredient');
//     expect(ingredientLabel).toBeInTheDocument();
//   });
// });
>>>>>>> main-group-4-recipe-details
