import React from 'react';
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import {Notice} from '../Notice'

describe('test suite for Notice Page', () => {
    const setup = () => render(<Notice />);
    it('renders', () => {
        const {asFragment} = setup();
        expect(asFragment()).toMatchSnapshot();
    })
    it('should render the Notice title', async() => {
        const {getByText} = setup();
        
        const title = getByText(/Avisos/i);
        expect(title).toBeInTheDocument();
    })
})