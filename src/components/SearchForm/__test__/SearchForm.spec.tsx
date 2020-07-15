import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { SearchForm } from "..";
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
});

it('renders an empty search input on initial render', async () => {
    const history = createMemoryHistory();
    const {getByPlaceholderText} = render(
        <Router history={history}>
                <SearchForm />
            </Router>
    )
    
    await waitFor(() => {
        const searchInput = getByPlaceholderText("que quieres buscar?") as HTMLInputElement;
        expect(searchInput.value).toEqual("");
  });
});

it('redirects the user to the /search/favourite page when a valid search is provided', async() => {
    const history = createMemoryHistory();
    const {getByPlaceholderText} = render(
        <Router history={history}>
                <SearchForm />
            </Router>
    );

    await waitFor(() => {
        const searchInput = getByPlaceholderText('que quieres buscar?') as HTMLInputElement;
        fireEvent.change(searchInput, {target: {value: 'madrid'}});
        fireEvent.submit(searchInput);
        expect(history.location.pathname).toBe('/search/favourites');    
    })
});

it('does no redirect to the /search/favourite page when a invalid search is provided', async() => {

});
