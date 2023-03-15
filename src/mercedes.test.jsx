import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { HomePage } from './pages/HomePage';

describe('Form questions test', () => {
    test('The form displays the correct questions', () => {
        render(<HomePage />);
        const button = screen.getByText('Share your experience!');
        fireEvent.click(button);
        expect(screen.getByText('Which dining hall did you go to?')).toBeDefined();
        expect(screen.getByText('What was your wait time in minutes?')).toBeDefined();
        expect(screen.getByText('How would you rate the food?')).toBeDefined();
    });
});

describe('Form submit button test', () => {
    test('Clicking the submit button without entering any data leaves the user on the same page', async () => {
        render(<HomePage />);
        const button = screen.getByText('Share your experience!');
        fireEvent.click(button);
        expect(screen.getByText('Share Your Experience!')).toBeDefined();
        const submitButton = screen.getByText('Submit!');
        fireEvent.click(submitButton);
        expect(screen.getByText('Share Your Experience!')).toBeDefined();
    });
});