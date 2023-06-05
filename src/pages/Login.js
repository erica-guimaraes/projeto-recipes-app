import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const minCharacter = 6;
  const isDisabled = !regexEmail.test(userEmail) || password.length <= minCharacter;
  // function handleDisabled() {
  //   return !regexEmail.test(userEmail);
  // }

  function handleSubmitButton(event) {
    event.preventDefault();
    const history = useHistory();
    const user = { email: userEmail };
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/recipes');
  }

  return (
    <form onSubmit={ handleSubmitButton }>
      <label htmlFor="email">
        <input
          id="email"
          name="email"
          value={ userEmail }
          onChange={ ({ target }) => setEmail(target.value) }
          data-testid="email-input"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          id="password"
          data-testid="password-input"
        />
      </label>
      <label htmlFor="submit">
        <button
          name="submit"
          id="submit"
          type="submit"
          data-testid="login-submit-btn"
          disabled={ isDisabled }
        >
          submit
        </button>
      </label>
    </form>
  );
}

export default Login;
