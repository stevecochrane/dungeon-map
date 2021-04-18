import * as React from "react";
import { render } from "@testing-library/react";
import Tool from "../../src/components/Tool";

describe("Tool", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Tool />);
    expect(getByTestId("Tool")).toBeInTheDocument();
  });

  test("Renders as inactive if not active tool", () => {
    const { getByTestId } = render(<Tool id="foo" activeTool="bar" />);
    expect(getByTestId("Tool").getAttribute("data-active")).toBe("false");
  });

  test("Renders as active if active tool", () => {
    const { getByTestId } = render(<Tool id="foo" activeTool="foo" />);
    expect(getByTestId("Tool").getAttribute("data-active")).toBe("true");
  });
});
