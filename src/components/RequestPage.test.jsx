import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import Request from "./RequestPage"

vi.mock('react-router-dom', () => ({
    useNavigate: vi.fn(),
}));

describe('Request Page', () => {
  test("When a user chooses to repair, they can input an OBD code", () => {
    render(<Request />);
    expect(screen.getByText('DTC Code:')).toBeTruthy();
    const input = screen.getByPlaceholderText(/Ex\. P0150/i);
    fireEvent.change(input, { target: { value: 'P0150' } });
    expect(input.value).toBe('P0150');
  });
});
