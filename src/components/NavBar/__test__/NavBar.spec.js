import React from 'react';
import { render } from '@testing-library/react';
import { NavBar} from '../NavBar';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'


test('renders learn react link', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
            <Router history={history}>
                <NavBar />
            </Router>
    );
    const linkElement = getByText(/Inicio/i);
    expect(linkElement).toBeInTheDocument();
});


it('renders', () => {
    const history = createMemoryHistory();
    const {asFragment} = render(
        <Router history={history}>
                <NavBar />
            </Router>
    );

    expect(asFragment()).toMatchSnapshot();
})