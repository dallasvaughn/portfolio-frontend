import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../components/Hero';

describe('Hero', () => {
  it('renders the hero', () => {
    render(<Hero />);

    const span = screen.getByText('Developer');
    expect(span).toBeInTheDocument();
  });
});
