import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';

describe('Testando o componente "SearchBar"', () => {
  it('Verifica se é renderizado os elementos corretamente', () => {
    const history = createMemoryHistory();
    history.push('/meals');
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchButton = screen.getByTestId('exec-search-btn');

    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetterRadio).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
});
