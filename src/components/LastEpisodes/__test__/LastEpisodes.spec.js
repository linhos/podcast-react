import React from 'react';
import { render } from '@testing-library/react';
import { LastEpisodes } from '../index';

test('renders Last episodes component correctly', () => {

    const { getByText } = render(<LastEpisodes />);
    
    const linkElement = getByText(/Last episode 1/i);
    expect(linkElement).toBeInTheDocument();
});