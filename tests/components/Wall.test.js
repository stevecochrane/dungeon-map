import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Wall from "../../app/components/Wall";

describe("Wall", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Wall />);
    expect(getByTestId("Wall")).toBeInTheDocument();
  });

  test("Clicking Wall toggles active state", () => {
    const { getByTestId } = render(<Wall />);
    const wall = getByTestId("Wall");
    expect(wall.getAttribute("data-active")).toBe("false");
    fireEvent.mouseDown(wall);
    expect(wall.getAttribute("data-active")).toBe("true");
    fireEvent.mouseDown(wall);
    expect(wall.getAttribute("data-active")).toBe("false");
  });
});
