import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('find inner html', () => {
  render(<App />);
  const linkElement = screen.getByText(/hi there/);
  expect(linkElement.innerHTML).toContain('hello');
});
