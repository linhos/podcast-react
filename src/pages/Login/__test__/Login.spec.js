import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';


import Login from '../index';

describe('test suite for Login Component', () => {
    afterEach(cleanup);

    const mockFunctions = {
        handleLoginSubmit: jest.fn()
    }

    it('render the form correctly', () => {
        const {getByLabelText, getByText} = render(<Login />);

        const usernameInput = getByLabelText('Usuario');
        expect(usernameInput).toHaveAttribute('type', 'text');  
        expect(usernameInput).not.toHaveValue();

        const passwordInput = getByLabelText('Contraseña')
        expect(passwordInput).toHaveAttribute('type', 'password');

        const buttonSubmit = getByText('Inicia sesión');
        expect(buttonSubmit).toHaveValue('Inicia sesión');
    });

    it('submit form when fields are empty', async () => {
        const {
            getByLabelText,
            container,
            findByTestId
        } = render(<Login />);

        const form = container.querySelector('form');
        const usernameInput = getByLabelText('Usuario');
        const passwordInput = getByLabelText('Contraseña');

        expect(mockFunctions.handleLoginSubmit).toHaveBeenCalledTimes(0);

        fireEvent.blur(usernameInput);
        fireEvent.blur(passwordInput);

        fireEvent.submit(form);

        expect((await findByTestId('email-errors')).innerHTML).toBe('El usuario es obligatorio.');
        expect((await findByTestId('password-errors')).innerHTML).toBe('La contraseña es obligatoria.')

    })

    it('renders', () => {
        const {asFragment} = render(<Login />);
        expect(asFragment()).toMatchSnapshot();
    })
})