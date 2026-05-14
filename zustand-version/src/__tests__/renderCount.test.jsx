import React from "react";
// Using plain Vitest assertions to avoid jest-dom setup in CI
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders required render-count elements and adds item to cart (zustand)", async () => {
  render(<App />);
  const badges = await screen.findAllByTestId("render-count");
  expect(badges.length).toBeGreaterThanOrEqual(1);
  const addButtons = await screen.findAllByRole("button", {
    name: /Add to cart/i,
  });
  const user = userEvent.setup();
  await user.click(addButtons[0]);
  const cartChip = screen.getByText(/Cart items/i).closest("div");
  expect(cartChip).not.toBeNull();
  expect(badges[0].textContent).toMatch(/\d+/);
});
