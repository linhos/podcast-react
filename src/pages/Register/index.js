import React, {useRef, useState} from 'react';

const Register = () => {
    const registerForm = useRef(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const handleRegisterFormSubmit = (event) => {
        event.preventDefault();
        console.log(`submiting...`);
        setUsernameError('El usuario es obligatorio.');
        setEmailError("El email es obligatorio.");
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleRegisterFormSubmit} ref={registerForm}>
                <label htmlFor='username'>Usuario</label>
                <input type="text" id="username" name="username" />
                {usernameError && 
                    <div data-testid="username-errors" className="error">
                        {usernameError}
                    </div>
                }

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                {emailError && 
                    <div data-testid="email-errors" className="error">
                        {emailError}
                    </div>
                }


                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" required/>

                <input type="submit" value="Registro" />
            </form>
        </>
    )
}

export default Register;