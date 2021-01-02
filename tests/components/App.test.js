import React from "react";
import { render } from "@testing-library/react";
import App from "../../src/components/App";

describe("App", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("App")).toBeInTheDocument();
  });
});
