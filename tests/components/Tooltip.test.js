import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "../../app/components/Tooltip";

describe("Tooltip", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Tooltip />);
    expect(getByTestId("Tooltip")).toBeInTheDocument();
  });
});
