import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Recent10JobsPosted from './Recent10JobsPosted';

describe('<Recent10JobsPosted />', () => {
  test('it should mount', () => {
    render(<Recent10JobsPosted />);

    const Recent10JobsPosted = screen.getByTestId('Recent10JobsPosted');

    expect(Recent10JobsPosted).toBeInTheDocument();
  });
});