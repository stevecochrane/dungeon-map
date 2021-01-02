import React from "react";
import { render } from "@testing-library/react";
import BlankCell from "../../src/components/BlankCell";

describe("BlankCell", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<BlankCell />);
    expect(getByTestId("BlankCell")).toBeInTheDocument();
  });
});
