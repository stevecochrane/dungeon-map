import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Wall from "../../app/components/Wall";
import gapTypes from "../../app/constants/gapTypes";

describe("Wall", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Wall />);
    expect(getByTestId("Wall")).toBeInTheDocument();
  });

  test("Clicking Wall with wall tool active toggles active state", () => {
    const { getByTestId } = render(<Wall activeTool="wall" gapType={gapTypes.EMPTY} />);
    const wall = getByTestId("Wall");
    expect(wall.getAttribute("data-type")).toBe(gapTypes.EMPTY);
    fireEvent.mouseDown(wall);
    expect(wall.getAttribute("data-type")).toBe(gapTypes.WALL);
    fireEvent.mouseDown(wall);
    expect(wall.getAttribute("data-type")).toBe(gapTypes.EMPTY);
  });

  test("Clicking Wall with wall tool inactive does not change active state", () => {
    const { getByTestId } = render(<Wall activeTool="room" gapType={gapTypes.EMPTY} />);
    const wall = getByTestId("Wall");
    expect(wall.getAttribute("data-type")).toBe(gapTypes.EMPTY);
    fireEvent.mouseDown(wall);
    expect(wall.getAttribute("data-type")).toBe(gapTypes.EMPTY);
  });
});
