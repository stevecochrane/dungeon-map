import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tile from "../../app/components/Tile";

describe("Tile", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Tile />);
    expect(getByTestId("Tile")).toBeInTheDocument();
  });

  test("Clicking Tile surface toggles active state", () => {
    const { getByTestId } = render(<Tile />);
    const tileSurface = getByTestId("Tile-surface");
    expect(tileSurface.getAttribute("data-active")).toBe("false");
    fireEvent.click(tileSurface);
    expect(tileSurface.getAttribute("data-active")).toBe("true");
    fireEvent.click(tileSurface);
    expect(tileSurface.getAttribute("data-active")).toBe("false");
  });
});
