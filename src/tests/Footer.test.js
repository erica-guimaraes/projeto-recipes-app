import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
// import { act } from 'react-dom/test-utils';
import Footer from '../components/Footer';

describe('Testando Footer component', () => {
  it('Verifica se ao clicar nas imagens, é levado para o path correto', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={ history }>
        <Footer />
      </Router>,
    );
    const drinksImage = getByTestId('drinks-bottom-btn');
    const mealsImage = getByTestId('meals-bottom-btn');
    userEvent.click(drinksImage);
    waitFor(() => expect(history.location.pathname).toBe('/drinks'));
    userEvent.click(mealsImage);
    waitFor(() => expect(history.location.pathname).toBe('/meals'));
  });
});
