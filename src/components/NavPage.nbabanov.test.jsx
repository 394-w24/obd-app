import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuthState, signOut } from '.././utilities/firebase';
import NavPage from './NavPage';

vi.mock('../utilities/firebase', () => ({
  useAuthState: vi.fn(),
  signOut: vi.fn(),
}));

describe('when leaving the application, the logout button should log the user out of firebase and app', () => {
  test('at navpage, logs the user out of firebase and app when logout button is clicked', async () => {
    const mockSignOut = vi.fn();
    useAuthState.mockReturnValue([{ displayName: 'Test User' }]);
    signOut.mockImplementation(mockSignOut);

    render(
      <Router>
        <NavPage />
      </Router>
    );

    const logoutButton = screen.getByText('Logout');
    fireEvent.click(logoutButton);

    expect(mockSignOut).toHaveBeenCalled();
  });
  
  test('shows Logout button on NavPage when logged in', () => {
    useAuthState.mockReturnValue([{ displayName: 'Joe' }]);
    
    render(
      <Router>
        <NavPage />
      </Router>
    );

    const button = screen.getByText(/Logout/i);
    expect(button).to.exist;
  });
});