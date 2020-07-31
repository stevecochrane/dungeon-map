import React from "react";
import { render } from "@testing-library/react";
import BlankLine from "../../app/components/BlankLine";

describe("BlankLine", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<BlankLine />);
    expect(getByTestId("BlankLine")).toBeInTheDocument();
  });
});
