import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import App from '../App';
import { meals } from '../../cypress/mocks/mealCategories';
import { drinks } from '../../cypress/mocks/drinkCategories';

describe('Testando o componente "CategoryButtons" na página de comidas', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(meals),
    });
  });

  afterEach(jest.restoreAllMocks);

  it('Verifica se é renderizado os botões de busca por categorias corretamente', async () => {
    const history = createMemoryHistory();
    history.push('/meals');
    render(
      <Router history={ history }>
        <App />
      </Router>,
    );
    const allButton = screen.getByTestId('All-category-filter');
    const beefButton = screen.getByTestId('Beef-category-filter');
    const breakfastButton = screen.getByTestId('Breakfast-category-filter');
    const chickenButton = screen.getByTestId('Chicken-category-filter');
    const dessertButton = screen.getByTestId('Dessert-category-filter');
    const goatButton = screen.getByTestId('Goat-category-filter');

    expect(allButton).toBeInTheDocument();
    await expect(beefButton).toBeInTheDocument();
    await expect(breakfastButton).toBeInTheDocument();
    await expect(chickenButton).toBeInTheDocument();
    await expect(dessertButton).toBeInTheDocument();
    await expect(goatButton).toBeInTheDocument();
  });
});
