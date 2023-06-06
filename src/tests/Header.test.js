import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
// import { act } from 'react-dom/test-utils';
import Header from '../components/Header';

describe('Testando Header component', () => {
  it('Verifica se ao clicar em profile, é levado para o path correto', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={ history }>
        <Header />
      </Router>,
    );
    const title = getByTestId('page-title');
    expect(title).toBeInTheDocument();
    const profileIcon = getByTestId('profile-top-btn');
    expect(profileIcon).toBeInTheDocument();
    const searchIcon = getByTestId('search-top-btn');
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(profileIcon);
    waitFor(() => expect(history.location.pathname).toBe('/profile'));
  });
  it('Verifica se ao clicar em search, é levado para o path correto', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={ history }>
        <Header />
      </Router>,
    );
    const searchIcon = getByTestId('search-top-btn');
    expect(searchIcon).toBeInTheDocument();
    userEvent.click(searchIcon);
    waitFor(() => expect(history.location.pathname).toBe('/search'));
  });
});
