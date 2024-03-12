import {describe, expect, test} from 'vitest';
import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import NavPage from './NavPage';
import LocalMechanics from './LocalMechanics';
import RepairOptionsPage from './RepairOptionsPage';

vi.mock("react-router-dom", () => ({
    useNavigate: vi.fn(),
    Link: ({ children }) => children,
    Router: ({ children }) => <>{children}</>
  }));
  

describe("when navigating away from navpage, the home button should bring the user back to the home page", () => {
    test("start at navpage, go to repairoptions page, and return", () => {
        render(<NavPage/>)

        //make sure there is "Welcome" and no home logon
        const homeIcon = screen.queryByAltText("Repair Icon")
        expect(homeIcon).toBeNull()

    })

    test("home button on mechanics page take user back home", async () => {
        const history = createMemoryHistory()

        render(
            <Router history={history}>
              <LocalMechanics />
              <NavPage/>
            </Router>,
          )


        //find home icon
        const homeIcon = screen.getByAltText("Repair Icon")
        expect(homeIcon).toBeDefined()
        
        //click home icon
        fireEvent.click(homeIcon)
        
        //make sure user is at home page!
        const navPage= screen.getAllByText("Repair")
        expect(navPage).toBeDefined()
    })


    test("home button on repair options take user back home", async () => {
        const history = createMemoryHistory()

        render(
            <Router history={history}>
              <RepairOptionsPage/>
              <NavPage/>
            </Router>,
          )


        //find home icon
        const homeIcon = screen.getByAltText("Repair Icon")
        expect(homeIcon).toBeDefined()
        
        //click home icon
        fireEvent.click(homeIcon)
        
        //make sure user is at home page!
        const navPage= screen.getAllByText("Repair")
        expect(navPage).toBeDefined()
    })


});
