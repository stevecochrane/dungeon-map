import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Gap from "../../app/components/Gap";
import gapTypes from "../../app/constants/gapTypes";
import toolTypes from "../../app/constants/toolTypes";

describe("Gap", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Gap />);
    expect(getByTestId("Gap")).toBeInTheDocument();
  });

  test("Clicking Gap with Door tool active toggles Gap to Door and back", () => {
    const { getByTestId } = render(<Gap activeTool={toolTypes.DOOR} gapType={gapTypes.EMPTY} />);
    const gap = getByTestId("Gap");
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
    fireEvent.mouseDown(gap);
    expect(gap.getAttribute("data-type")).toBe(gapTypes.DOOR);
    fireEvent.mouseDown(gap);
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
  });

  test("Clicking Gap with Wall tool active toggles Gap to Wall and back", () => {
    const { getByTestId } = render(<Gap activeTool={toolTypes.WALL} gapType={gapTypes.EMPTY} />);
    const gap = getByTestId("Gap");
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
    fireEvent.mouseDown(gap);
    expect(gap.getAttribute("data-type")).toBe(gapTypes.WALL);
    fireEvent.mouseDown(gap);
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
  });

  test("Clicking Gap with Room tool active does not change Gap", () => {
    const { getByTestId } = render(<Gap activeTool={toolTypes.ROOM} gapType={gapTypes.EMPTY} />);
    const gap = getByTestId("Gap");
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
    fireEvent.mouseDown(gap);
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
  });
});
