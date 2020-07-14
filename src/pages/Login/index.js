import React, {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';
import loginUser from '../../services/loginUser';


const Login = () => {
    const history = useHistory();
    const loginForm = useRef(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail(loginForm.current.email.value);
        setPassword(loginForm.current.password.value);
        const result = loginUser(email, password);
        if (result.user) {
            history.push(`/dashboard`);
        }
    }


    return(
        <>
            <h1>Login</h1>
            <form ref={loginForm} onSubmit={handleSubmit}>
                <label htmlFor='email'>Usuario</label>
                <input type="text" name="email" id="email" required/>
                <hr />
                <label htmlFor='password'>Contraseña</label>
                <input type="password" name="password" id="password" required />
                <br /><br />
                <input type="submit" value="Inicia sesión" />
            </form>
        </>
    )
}

export default Login;