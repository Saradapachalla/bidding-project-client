import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobDetails from './index';

describe('<JobDetails />', () => {
  test('it should mount', () => {
    render(<JobDetails />);

    const JobDetails = screen.getByTestId('JobDetails');

    expect(JobDetails).toBeInTheDocument();
  });
});