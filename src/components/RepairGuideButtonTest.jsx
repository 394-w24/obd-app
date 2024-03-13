import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RepairOptionsPage from './RepairOptionsPage';

describe('RepairOptionsPage', () => {
  test('shows repair guide popup on button click', () => {
    render(<RepairOptionsPage />);
    
    const button = screen.getByText('Repair Guide'); 
    userEvent.click(button);
    
    expect(screen.getByText('Repair Guide')).toBeInTheDocument();

  });
});
