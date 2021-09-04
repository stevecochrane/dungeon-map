import React from "react";
import { render } from "@testing-library/react";
import Door from "../../src/components/Door";

describe("Door", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Door />);
    expect(getByTestId("Door")).toBeInTheDocument();
  });
});
