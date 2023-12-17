// Use "npm test"

import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the header with correct text', () => {
    render(<App />);
    const headerElement = screen.getByText(/May the Odds Be Ever in Your Favor!/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<App />);
    const mainHeading = screen.getByText(/Counting Down to 2024/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders the footer with copyright text', () => {
    render(<App />);
    const footerText = screen.getByText(/© 2023 Countdown to 2024. All rights reserved./i);
    expect(footerText).toBeInTheDocument();
  });

  it('renders the CountdownTimer component', () => {
    render(<App />);
    const countdownTimer = screen.getByTestId('countdown-timer');
    expect(countdownTimer).toBeInTheDocument();
  });
});

