// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { renderWithRouterAndRedux } from './helpers/renderWith';
// import Login from '../pages/Login';

// describe('Testando Login Page', () => {
//   renderWithRouterAndRedux(<Login />);
//   it('Verifica se o botão de login está desabilitado e se habilita conforme os inputs são validados', () => {
//     const loginButton = screen.getByTestId('login-submit-btn');
//     const emailInput = screen.getByTestId('email-input');
//     const passwordInput = screen.getByTestId('password-input');
//     expect(loginButton).toBeDisabled();
//     userEvent.type(emailInput, 'alguem@alguem.com');
//     userEvent.type(passwordInput, '1234567');
//     expect(loginButton).not.toBeDisabled();
//   });
// });
