import React from 'react';
import { render } from '@testing-library/react';
import { ListOfFavourites } from '../index';
import { Router, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history'

test('renders learn react link', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
            <Router history={history}>
                <ListOfFavourites />
            </Router>
    );
    const linkElement = getByText(/titulo1/i);
    expect(linkElement).toBeInTheDocument();
});