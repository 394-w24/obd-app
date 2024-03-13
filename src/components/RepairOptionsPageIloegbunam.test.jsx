import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import RepairOptionsPage from './RepairOptionsPage';

vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual, // Spread all actual exports
    useNavigate: vi.fn(), // Your mock implementation of useNavigate
  };
});

describe('RepairOptionsPage Interaction', () => {
  test("User can click on 'Part Location' button which opens a popup", () => {
    render(
      <Router>
        <RepairOptionsPage />
      </Router>
    );

    const partLocationButton = screen.getByText('Part Location');
    fireEvent.click(partLocationButton);

    const popupHeader = screen.getByText('Part Location');
    const popupDetailText = screen.getByText('Oxygen Sensor in the Exhaust system');
    
    expect(popupHeader).toBeInTheDocument();
    expect(popupDetailText).toBeInTheDocument();
  });
});
