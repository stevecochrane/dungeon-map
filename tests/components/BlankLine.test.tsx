import * as React from "react";
import { render } from "@testing-library/react";
import BlankLine from "../../src/components/BlankLine";

describe("BlankLine", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<BlankLine />);
    expect(getByTestId("BlankLine")).toBeInTheDocument();
  });
});
