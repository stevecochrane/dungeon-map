import * as React from "react";
import { render } from "@testing-library/react";
import Room from "../../src/components/Room";

describe("Room", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Room />);
    expect(getByTestId("Room")).toBeInTheDocument();
  });
});
