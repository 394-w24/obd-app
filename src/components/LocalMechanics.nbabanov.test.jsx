import { render, screen } from '@testing-library/react';
import LocalMechanics from './LocalMechanics';
import { describe, expect, vi } from 'vitest';

// Mock the useDbData hook to return some dummy data
vi.mock('../utilities/firebase', () => ({
  useDbData: vi.fn().mockReturnValue([[
    { Name: 'Test Mechanic', Quote: 'Test Quote', Rating: 5, Latitude: 0, Longitude: 0 },
  ]]),
}));

describe('When user asked for mechanic quotes, they get a list of local mechanics', () => {
  test('renders LocalMechanics component', () => {
    render(<LocalMechanics />);
    
    // Check if "Mechanics Near You" header is in the document
    expect(screen.getByText('Mechanics Near You')).toBeTruthy();
  });
});