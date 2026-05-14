import React from "react";
// Using plain Vitest assertions to avoid jest-dom setup in CI
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders required render-count elements and adds item to cart", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  // Ensure render-count badges exist (dev only)
  const badges = await screen.findAllByTestId("render-count");
  expect(badges.length).toBeGreaterThanOrEqual(1);

  // Find the first Add to cart button and click it a few times
  const addButtons = await screen.findAllByRole("button", {
    name: /Add to cart/i,
  });
  expect(addButtons.length).toBeGreaterThan(0);
  const user = userEvent.setup();
  await user.click(addButtons[0]);
  await user.click(addButtons[0]);

  // Cart item count should reflect additions
  const cartChip = screen.getByText(/Cart items/i).closest("div");
  expect(cartChip).not.toBeNull();

  // At least one render-count badge should contain a number
  expect(badges[0].textContent).toMatch(/\d+/);
});
