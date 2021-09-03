import React from "react";
import { render } from "@testing-library/react";
import ToolPalette from "../../src/components/ToolPalette";

describe("ToolPalette", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<ToolPalette />);
    expect(getByTestId("ToolPalette")).toBeInTheDocument();
  });
});
