import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero content and actions', () => {
  render(<App />);

  expect(screen.getByText(/Ujjwal Gupta/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Projects/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument();
});
