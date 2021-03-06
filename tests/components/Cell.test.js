import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cell from "../../src/components/Cell";
import cellTypes from "../../src/constants/cellTypes";
import toolTypes from "../../src/constants/toolTypes";

describe("Cell", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Cell />);
    expect(getByTestId("Cell")).toBeInTheDocument();
  });

  test("Clicking Cell with Room tool active sets Cell to be a Room", () => {
    const { getByTestId } = render(<Cell activeTool={toolTypes.ROOM} cellType={cellTypes.EMPTY} />);
    const cell = getByTestId("Cell");
    expect(cell.getAttribute("data-type")).toBe(cellTypes.EMPTY);
    fireEvent.mouseDown(cell);
    expect(cell.getAttribute("data-type")).toBe(cellTypes.ROOM);
    fireEvent.mouseDown(cell);
    expect(cell.getAttribute("data-type")).toBe(cellTypes.ROOM);
  });

  test("Clicking Cell with Note tool active sets Cell to be a Note", () => {
    const { getByTestId } = render(<Cell activeTool={toolTypes.NOTE} cellType={cellTypes.EMPTY} />);
    const cell = getByTestId("Cell");
    expect(cell.getAttribute("data-type")).toBe(cellTypes.EMPTY);
    fireEvent.mouseDown(cell);
    expect(cell.getAttribute("data-type")).toBe(cellTypes.NOTE);
    fireEvent.mouseDown(cell);
    expect(cell.getAttribute("data-type")).toBe(cellTypes.NOTE);
  });

  test("Clicking Cell marked as Room with Sponge tool active sets Cell to be Empty", () => {
    const { getByTestId } = render(<Cell activeTool={toolTypes.SPONGE} cellType={cellTypes.ROOM} />);
    const cell = getByTestId("Cell");
    expect(cell.getAttribute("data-type")).toBe(cellTypes.ROOM);
    fireEvent.mouseDown(cell);
    expect(cell.getAttribute("data-type")).toBe(cellTypes.EMPTY);
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
