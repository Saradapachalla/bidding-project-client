import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobsForm from './JobsForm';

describe('<JobsForm />', () => {
  test('it should mount', () => {
    render(<JobsForm />);

    const JobsForm = screen.getByTestId('JobsForm');

    expect(JobsForm).toBeInTheDocument();
  });
});