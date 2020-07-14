import React from 'react';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import Register from '../index';
 
describe('test suite for Register component', () => {

    afterEach(cleanup);

    const mockFunctions = {
        handleRegisterFormSubmit: jest.fn(),
    }

    it('submit form when fields are empty', async () => {

        const {
            getByLabelText,
            container,
            findByTestId
        } = render(<Register />);

        const form = container.querySelector('form');
        const usernameInput = getByLabelText('Usuario');
        const emailInput = getByLabelText('Email');
        const passwordInput = getByLabelText('Contraseña');

        expect(mockFunctions.handleRegisterFormSubmit).toHaveBeenCalledTimes(0);
        
        fireEvent.blur(usernameInput);
        fireEvent.blur(emailInput);
        fireEvent.blur(passwordInput);

        fireEvent.submit(form);

        expect((await findByTestId("username-errors")).innerHTML).toBe(
            "El usuario es obligatorio."
        );

        expect((await findByTestId("email-errors")).innerHTML).toBe(
            "El email es obligatorio."
        );
    })

    it('renders', () => {
        const {asFragment} = render(<Register />);
        expect(asFragment).toMatchSnapshot();
    })

    it('form renders correctly', () => {
        const {getByLabelText, getByText} = render(<Register />);

        const usernameInput = getByLabelText('Usuario');
        expect(usernameInput).toHaveAttribute('type', 'text');

        const emailInput = getByLabelText('Email');
        expect(emailInput).toHaveAttribute('type', 'email');

        const passwordInput = getByLabelText('Contraseña');
        expect(passwordInput).toHaveAttribute('type', 'password');
        expect(passwordInput).toHaveAttribute('required');

        const submitButton = getByText('Registro');
        expect(submitButton).toHaveValue('Registro');
    })

})