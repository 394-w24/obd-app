import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('sign in tests', () => {
    
  test("Sign in button should be present", () => {
    render(<App />);
    const counter = screen.getByRole('button');
    expect(counter).toBeDefined();
  });

});