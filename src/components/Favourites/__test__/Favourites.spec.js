import React from 'react';
import { render } from '@testing-library/react';
import { Favourites } from '../../Favourites';
import { Router, Link } from 'react-router-dom';
import { createMemoryHistory } from 'history'

test('renders learn react link', () => {
    const history = createMemoryHistory()
    const { getByText } = render(
            <Router history={history}>
                <Favourites />
            </Router>
    );
    const linkElement = getByText(/titulo1/i);
    expect(linkElement).toBeInTheDocument();
});