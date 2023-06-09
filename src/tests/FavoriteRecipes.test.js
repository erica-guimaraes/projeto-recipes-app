import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteRecipes from '../pages/FavoriteRecipes';

jest.mock('../components/Header', () => function MockedHeader() {
  return <div data-testid="mocked-header" />;
});

describe('Testando FavoriteRecipes Page', () => {
  it('Verifica se os botões All, Meals e Drinks estão presentes', () => {
    render(<FavoriteRecipes />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    const buttonMeals = screen.getByRole('button', { name: /meals/i });
    const buttonDrinks = screen.getByRole('button', { name: /drinks/i });

    expect(buttonAll).toBeInTheDocument();
    expect(buttonMeals).toBeInTheDocument();
    expect(buttonDrinks).toBeInTheDocument();
  });
});
