import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepairOptionsPage from './RepairOptionsPage';

describe('RepairOptionsPage', () => {
    test('opens PartsModal with content when Part Location button is clicked', async () => {
      render(<RepairOptionsPage />);
  
      
      fireEvent.click(screen.getByText(/Part Location/i));

      expect(await screen.findByText(/Oxygen Sensor in the Exhaust system/i)).toBeInTheDocument();
    });
  });
  