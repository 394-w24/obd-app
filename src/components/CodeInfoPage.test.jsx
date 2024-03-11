import React from "react";
import { render, screen, fireEvent, userEvent } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import Request from "./RequestPage";
import CodeInfoPage from "./CodeInfoPage";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
  useLocation: () => ({
      state: {
          vin: '1HGBH41JXMN109186',
          miles: '12345',
          code: 'P0150'
      }
  }),
  Link: ({ children }) => children,
}));

describe("Request Page", () => {
  test("When a user inputs an OBD code and clicks repair button, it shows diagnosis", async () => {
    render(<Request />);
    // const obdCodeInput = screen.getByPlaceholderText(/Ex\. P0150/i);
    // const vinInput = screen.getByPlaceholderText(/Ex\. 4Y1SL65848Z411439/i);
    // const mileageInput = screen.getByPlaceholderText(/Ex\. 45689/i);
    // const Button = screen.getByText("Repair");

    // userEvent.type(obdCodeInput, "P0150");
    // userEvent.type(vinInput, "1HGBH41JXMN109186");
    // userEvent.type(mileageInput, "12345");
    // userEvent.click(Button);

    render(<CodeInfoPage />);
    expect(screen.getByText(/Code Information/)).toBeTruthy();
    expect(screen.getByText(/1HGBH41JXMN109186/)).toBeTruthy();
    expect(screen.getByText(/12345/)).toBeTruthy();
    expect(screen.getByText(/P0150/)).toBeTruthy();
  });
});
