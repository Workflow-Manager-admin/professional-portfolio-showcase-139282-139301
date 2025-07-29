import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar and about/skills/experience/projects/contact sections', () => {
  render(<App />);
  expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/Skills/i)).toBeInTheDocument();
  expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
});
