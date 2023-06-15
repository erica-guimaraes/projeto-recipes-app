import { render, waitFor, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import meals from '../../cypress/mocks/meals';
import drinks from '../../cypress/mocks/drinks';
import Provider from '../context/Provider';
import DetailsProvider from '../context/DetailsProvider';
import RecipeDetails from '../pages/RecipeDetails';

describe('Testando a página de detalhes de receitas de comidas', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(meals),
    });
  });

  afterEach(jest.restoreAllMocks);

  it('', async () => {
    const history = createMemoryHistory();
    history.push('/meals/52977');
    render(
      <Router history={ history }>
        <DetailsProvider>
          <Provider>
            <RecipeDetails />
          </Provider>
        </DetailsProvider>
      </Router>,
    );

    waitFor(async () => {
      expect(await screen.findByTestId('recipe-photo')).toBeInTheDocument();
      expect(await screen.findByTestId('recipe-title')).toBeInTheDocument();
      expect(await screen.findByTestId('recipe-category')).toBeInTheDocument();
      expect(await screen.findByTestId('0-ingredient-name-and-measure')).toBeInTheDocument();
      expect(await screen.findByTestId('instructions')).toBeInTheDocument();
    });
  });
});

describe('Testando a página de detalhes das receitas de bebidas', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(drinks),
    });
  });

  afterEach(jest.restoreAllMocks);

  it('', async () => {
    const history = createMemoryHistory();
    history.push('/drinks/15997');
    render(
      <Router history={ history }>
        <DetailsProvider>
          <Provider>
            <RecipeDetails />
          </Provider>
        </DetailsProvider>
      </Router>,
    );

    waitFor(async () => {
      expect(await screen.findByTestId('recipe-photo')).toBeInTheDocument();
      expect(await screen.findByTestId('recipe-title')).toBeInTheDocument();
      expect(await screen.findByTestId('recipe-category')).toBeInTheDocument();
      expect(await screen.findByTestId('0-ingredient-name-and-measure')).toBeInTheDocument();
      expect(await screen.findByTestId('instructions')).toBeInTheDocument();
    });
  });
});
