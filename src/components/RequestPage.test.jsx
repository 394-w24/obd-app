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
  test("When a user chooses to repair, they can input a mileage value", () => {
    render(<Request />);
    expect(screen.getByText('Mileage:')).toBeTruthy();
    const input = screen.getByPlaceholderText('Enter mileage');
    fireEvent.change(input, { target: { value: '50000' } });
    expect(input.value).toBe('50000');
  });
  test("User can click on DTC help which opens a popup with guiding information", () => {
    render(<Request />);
    const helpButton = screen.getByText('How to retrieve DTC Code');
    fireEvent.click(helpButton);
    const popupContent = screen.getByText('*Enter currently supported DTC code: P0150');
    expect(popupContent).toBeTruthy();
  });
});
