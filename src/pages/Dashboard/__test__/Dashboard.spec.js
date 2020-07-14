import React from 'react';
import { render } from "@testing-library/react";
import Dashboard from "../index";

describe('test suite for Dashboard component', () => {
    it('should print the h1 tag with the text dashboard', () => {
        const {getByText} = render(<Dashboard />);
        const h1Element = getByText(/Dashboard/i);
        expect(h1Element).toBeInTheDocument()
    })

    it('renders', () => {
        const {asFragment} = render(<Dashboard />);
        expect(asFragment()).toMatchSnapshot();
    })
})