import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tile from "../../app/components/Tile";
import tileTypes from "../../app/constants/tileTypes";

describe("Tile", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Tile />);
    expect(getByTestId("Tile")).toBeInTheDocument();
  });

  test("Clicking empty Tile surface with Room tool active displays a room", () => {
    const { getByTestId } = render(<Tile activeTool="room" tileType={tileTypes.EMPTY} />);
    const tileSurface = getByTestId("Tile-surface");
    expect(tileSurface.getAttribute("data-type")).toBe(tileTypes.EMPTY);
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-type")).toBe(tileTypes.ROOM);
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-type")).toBe(tileTypes.EMPTY);
  });

  test("Clicking Tile surface with Room tool inactive does not change displayed state", () => {
    const { getByTestId } = render(<Tile activeTool="wall" tileType={tileTypes.EMPTY} />);
    const tileSurface = getByTestId("Tile-surface");
    expect(tileSurface.getAttribute("data-type")).toBe(tileTypes.EMPTY);
    fireEvent.mouseDown(tileSurface);
    expect(tileSurface.getAttribute("data-type")).toBe(tileTypes.EMPTY);
  });
});
