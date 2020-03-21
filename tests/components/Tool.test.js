import React from "react";
import { render } from "@testing-library/react";
import Tool from "../../app/components/Tool";

describe("Tool", () => {

  test("Renders with no props", () => {
    const { getByTestId } = render(<Tool />);
    expect(getByTestId("Tool")).toBeInTheDocument();
  });

});
