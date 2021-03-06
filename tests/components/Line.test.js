import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Line from "../../src/components/Line";
import lineTypes from "../../src/constants/lineTypes";
import toolTypes from "../../src/constants/toolTypes";

describe("Line", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Line />);
    expect(getByTestId("Line")).toBeInTheDocument();
  });

  test("Clicking Line with Door tool active sets Line to be a Door", () => {
    const { getByTestId } = render(<Line activeTool={toolTypes.DOOR} lineType={lineTypes.EMPTY} />);
    const line = getByTestId("Line");
    expect(line.getAttribute("data-type")).toBe(lineTypes.EMPTY);
    fireEvent.mouseDown(line);
    expect(line.getAttribute("data-type")).toBe(lineTypes.DOOR);
    fireEvent.mouseDown(line);
    expect(line.getAttribute("data-type")).toBe(lineTypes.DOOR);
  });

  test("Clicking Line with Wall tool active sets Line to be a Wall", () => {
    const { getByTestId } = render(<Line activeTool={toolTypes.WALL} lineType={lineTypes.EMPTY} />);
    const line = getByTestId("Line");
    expect(line.getAttribute("data-type")).toBe(lineTypes.EMPTY);
    fireEvent.mouseDown(line);
    expect(line.getAttribute("data-type")).toBe(lineTypes.WALL);
    fireEvent.mouseDown(line);
    expect(line.getAttribute("data-type")).toBe(lineTypes.WALL);
  });

  test("Clicking Line marked as Wall with Eraser tool active sets Line to be Empty", () => {
    const { getByTestId } = render(<Line activeTool={toolTypes.ERASER} lineType={lineTypes.WALL} />);
    const line = getByTestId("Line");
    expect(line.getAttribute("data-type")).toBe(lineTypes.WALL);
    fireEvent.mouseDown(line);
    expect(line.getAttribute("data-type")).toBe(lineTypes.EMPTY);
    fireEvent.mouseDown(line);
    expect(line.getAttribute("data-type")).toBe(lineTypes.EMPTY);
  });

  test("Clicking Line with Room tool active does not change Line", () => {
    const { getByTestId } = render(<Line activeTool={toolTypes.ROOM} lineType={lineTypes.EMPTY} />);
    const line = getByTestId("Line");
    expect(line.getAttribute("data-type")).toBe(lineTypes.EMPTY);
    fireEvent.mouseDown(line);
    expect(line.getAttribute("data-type")).toBe(lineTypes.EMPTY);
  });
});
