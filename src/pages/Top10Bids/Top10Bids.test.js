import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Top10Bids from './Top10Bids';

describe('<Top10Bids />', () => {
  test('it should mount', () => {
    render(<Top10Bids />);

    const Top10Bids = screen.getByTestId('Top10Bids');

    expect(Top10Bids).toBeInTheDocument();
  });
});