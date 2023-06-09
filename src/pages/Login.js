import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../context/Context';

function Login() {
  const { setUserEmailProvider } = useContext(Context);

  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const minCharacter = 6;
  const isDisabled = !regexEmail.test(userEmail) || password.length <= minCharacter;
  const history = useHistory();

  function handleSubmitButton(event) {
    event.preventDefault();
    const user = { email: userEmail };
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/meals');
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
          onClick={ () => setUserEmailProvider(userEmail) }
        >
          submit
        </button>
      </label>
    </form>
  );
}

export default Login;
