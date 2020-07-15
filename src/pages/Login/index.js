import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import loginUser from '../../services/loginUser';


const Login = () => {
    const history = useHistory();
    const loginForm = useRef(null)
    const [email, setEmail] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        if (!email) {
            setEmailError('El usuario es obligatorio.')
        }
        if (!password) {
            setPasswordError('La contraseña es obligatoria.');
        }
        
        if (email && password) {
            const result = loginUser(email, password);
            if (result.user) {
                history.push(`/dashboard`);
            }
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }


    return(
        <>
            <h1>Login</h1>
            <form ref={loginForm} onSubmit={handleLoginSubmit}>
                <label htmlFor='email'>Usuario</label>
                <input type="text" name="email" id="email" onChange={handleEmailChange} placeholder="usuario"/>
                {emailError &&
                    <div data-testid="email-errors" className="error">{emailError}</div>
                }
                <hr />
                <label htmlFor='password'>Contraseña</label>
                <input type="password" name="password" id="password" onChange={handlePasswordChange} placeholder="contraseña"/>
                {passwordError &&
                    <div data-testid="password-errors" className="error">{passwordError}</div>
                }
                <br /><br />
                <input type="submit" value="Inicia sesión" />
            </form>
        </>
    )
}

export default Login;