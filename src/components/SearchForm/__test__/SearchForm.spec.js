import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { SearchForm } from "../../SearchForm";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

test('renders learn react link', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
            <Router history={history}>
                <SearchForm />
            </Router>
    );
    
    const linkElement = getByText(/Buscar/i);
    expect(linkElement).toBeInTheDocument();
});

it('renders', () => {
    const history = createMemoryHistory();
    const {asFragment} = render(
        <Router history={history}>
                <SearchForm />
            </Router>
    )
    expect(asFragment()).toMatchSnapshot();
})
