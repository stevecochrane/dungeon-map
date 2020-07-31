import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tile from "../../app/components/Tile";
import cellTypes from "../../app/constants/cellTypes";
import toolTypes from "../../app/constants/toolTypes";

describe("Tile", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Tile />);
    expect(getByTestId("Tile")).toBeInTheDocument();
  });

  test("Clicking empty Tile surface with Room tool active displays a room", () => {
    const { getByTestId } = render(<Tile activeTool={toolTypes.ROOM} tileType={cellTypes.EMPTY} />);
    const tileSurface = getByTestId("Tile-surface");
    expect(tileSurface.getAttribute("data-type")).toBe(cellTypes.EMPTY);
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-type")).toBe(cellTypes.ROOM);
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-type")).toBe(cellTypes.EMPTY);
  });

  test("Clicking Tile surface with Room tool inactive does not change displayed state", () => {
    const { getByTestId } = render(<Tile activeTool={toolTypes.WALL} tileType={cellTypes.EMPTY} />);
    const tileSurface = getByTestId("Tile-surface");
    expect(tileSurface.getAttribute("data-type")).toBe(cellTypes.EMPTY);
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-type")).toBe(cellTypes.EMPTY);
  });
});
