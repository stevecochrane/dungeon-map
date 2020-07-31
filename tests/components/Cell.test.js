import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cell from "../../app/components/Cell";
import cellTypes from "../../app/constants/cellTypes";
import toolTypes from "../../app/constants/toolTypes";

describe("Cell", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Cell />);
    expect(getByTestId("Cell")).toBeInTheDocument();
  });

  test("Clicking Cell with Room tool active toggles Cell to Room and back", () => {
    const { getByTestId } = render(<Cell activeTool={toolTypes.ROOM} cellType={cellTypes.EMPTY} />);
    const cell = getByTestId("Cell");
    expect(cell.getAttribute("data-type")).toBe(cellTypes.EMPTY);
    fireEvent.mouseDown(cell);
    expect(cell.getAttribute("data-type")).toBe(cellTypes.ROOM);
    fireEvent.mouseDown(cell);
    expect(cell.getAttribute("data-type")).toBe(cellTypes.EMPTY);
  });

  test("Clicking Cell with Wall tool active does not change Cell", () => {
    const { getByTestId } = render(<Cell activeTool={toolTypes.WALL} cellType={cellTypes.EMPTY} />);
    const cell = getByTestId("Cell");
    expect(cell.getAttribute("data-type")).toBe(cellTypes.EMPTY);
    fireEvent.mouseDown(cell);
    expect(cell.getAttribute("data-type")).toBe(cellTypes.EMPTY);
  });
});
