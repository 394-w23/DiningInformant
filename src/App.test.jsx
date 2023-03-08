import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('counter tests', () => {
  test('the text Share your experience! should be on screen (case sensitive)', () => {
    render(<App />);
    expect(screen.getByText('Share your experience!')).toBeDefined();
  });
  /*
  test('Counter should increment by one when clicked', async () => {
    render(<App />);
    const counter = screen.getByRole('button');
    fireEvent.click(counter);
    expect(await screen.getByText('count is: 1')).toBeDefined();
  });*/
});
