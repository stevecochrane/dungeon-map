import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Wall from "../../app/components/Wall";

describe("Wall", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Wall />);
    expect(getByTestId("Wall")).toBeInTheDocument();
  });

  test("Clicking Wall with wall tool active toggles active state", () => {
    const { getByTestId } = render(<Wall activeTool="wall" />);
    const wall = getByTestId("Wall");
    expect(wall.getAttribute("data-active")).toBe("false");
    fireEvent.mouseDown(wall);
    expect(wall.getAttribute("data-active")).toBe("true");
    fireEvent.mouseDown(wall);
    expect(wall.getAttribute("data-active")).toBe("false");
  });

  test("Clicking Wall with wall tool inactive does not change active state", () => {
    const { getByTestId } = render(<Wall activeTool="room" />);
    const wall = getByTestId("Wall");
    expect(wall.getAttribute("data-active")).toBe("false");
    fireEvent.mouseDown(wall);
    expect(wall.getAttribute("data-active")).toBe("false");
  });
});
