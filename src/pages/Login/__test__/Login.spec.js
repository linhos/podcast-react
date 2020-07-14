import React from 'react';
import {render, cleanup} from '@testing-library/react';


import Login from '../index';

describe('test suite for Login Component', () => {
    afterEach(cleanup);
    it('render the form correctly', () => {
        
        const {getByLabelText, getByText} = render(<Login />);

        const usernameInput = getByLabelText('Usuario');
        expect(usernameInput).toHaveAttribute('type', 'text');
        expect(usernameInput).toHaveAttribute('required');
        expect(usernameInput).not.toHaveValue();

        const passwordInput = getByLabelText('Contraseña')
        expect(passwordInput).toHaveAttribute('type', 'password');
        expect(passwordInput).toHaveAttribute('required');

        const buttonSubmit = getByText('Inicia sesión');
        expect(buttonSubmit).toHaveValue('Inicia sesión');
        
    })

    it('renders', () => {
        const {asFragment} = render(<Login />);
        console.log(asFragment());

        expect(asFragment()).toMatchSnapshot();
    })
})