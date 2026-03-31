import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero content and actions', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: /AI Engineer/i })).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /Projects/i }).length).toBeGreaterThan(0);
  expect(screen.getAllByRole('link', { name: /Contact/i }).length).toBeGreaterThan(0);
});
