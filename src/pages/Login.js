import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/login.css';

function Login() {
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
    <form onSubmit={ handleSubmitButton } className="container">
      <h1 className="title">Recipes App</h1>
      <label htmlFor="email" className="label">
        <input
          id="email"
          name="email"
          placeholder="Email"
          value={ userEmail }
          onChange={ ({ target }) => setEmail(target.value) }
          data-testid="email-input"
          className="input"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          id="password"
          data-testid="password-input"
          className="input"
        />
      </label>
      <label htmlFor="submit" className="label">
        <button
          name="submit"
          id="submit"
          type="submit"
          className="button"
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
