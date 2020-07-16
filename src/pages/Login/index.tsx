import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import loginUser from "../../services/loginUser";

const Login: React.FC = () => {
  const history = useHistory();
  const loginForm = useRef(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      setEmailError("El usuario es obligatorio.");
    }
    if (!password) {
      setPasswordError("La contraseña es obligatoria.");
    }

    if (email && password) {
      const result = loginUser(email, password);

      if(result.errors.length !== 0) {
        setValidationError('Los datos proporcionados no son válidos.')
      } else {
        history.push(`/dashboard`);
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value:string = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value:string = e.target.value;
    setPassword(value);
  };

  return (
    <>
      <h1>Login</h1>
      <form ref={loginForm} onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Usuario</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleEmailChange}
          placeholder="usuario"
        />
        {emailError && (
          <div data-testid="email-errors" className="error">
            {emailError}
          </div>
        )}
        <hr />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          placeholder="contraseña"
        />
        {passwordError && (
          <div data-testid="password-errors" className="error">
            {passwordError}
          </div>
        )}
        {validationError && (
          <div data-testid="validation-errors" className="error">
            {validationError}
          </div>
        )}
        <br />
        <br />
        <input type="submit" value="Inicia sesión" />
      </form>
    </>
  );
};

export default Login;
