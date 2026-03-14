import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  const headings = screen.getAllByText(/HAKS 2024/i);
  expect(headings.length).toBeGreaterThan(0);
});
