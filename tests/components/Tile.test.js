import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tile from "../../app/components/Tile";

describe("Tile", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Tile />);
    expect(getByTestId("Tile")).toBeInTheDocument();
  });

  test("Clicking Tile surface with Room tool active toggles active state", () => {
    const { getByTestId } = render(<Tile activeTool="room" />);
    const tileSurface = getByTestId("Tile-surface");
    expect(tileSurface.getAttribute("data-active")).toBe("false");
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-active")).toBe("true");
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-active")).toBe("false");
  });

  test("Clicking Tile surface with Room tool inactive does not change active state", () => {
    const { getByTestId } = render(<Tile activeTool="wall" />);
    const tileSurface = getByTestId("Tile-surface");
    expect(tileSurface.getAttribute("data-active")).toBe("false");
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-active")).toBe("false");
  });
});
