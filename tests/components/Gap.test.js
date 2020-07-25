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

  test("Clicking Gap with wall tool active toggles active state", () => {
    const { getByTestId } = render(<Gap activeTool={toolTypes.WALL} gapType={gapTypes.EMPTY} />);
    const gap = getByTestId("Gap");
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
    fireEvent.mouseDown(gap);
    expect(gap.getAttribute("data-type")).toBe(gapTypes.WALL);
    fireEvent.mouseDown(gap);
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
  });

  test("Clicking Gap with wall tool inactive does not change active state", () => {
    const { getByTestId } = render(<Gap activeTool={toolTypes.ROOM} gapType={gapTypes.EMPTY} />);
    const gap = getByTestId("Gap");
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
    fireEvent.mouseDown(gap);
    expect(gap.getAttribute("data-type")).toBe(gapTypes.EMPTY);
  });
});
