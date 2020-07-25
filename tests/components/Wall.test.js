import React from "react";
import { render } from "@testing-library/react";
import Wall from "../../app/components/Wall";

describe("Wall", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Wall />);
    expect(getByTestId("Wall")).toBeInTheDocument();
  });
});
