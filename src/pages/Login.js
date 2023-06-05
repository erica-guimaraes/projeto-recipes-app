import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label htmlFor="email">
        <input
          id="email"
          name="email"
          value={ email }
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
          data-testid="login-submit-btn"
        >
          submit
        </button>
      </label>
    </form>
  );
}

export default Login;
