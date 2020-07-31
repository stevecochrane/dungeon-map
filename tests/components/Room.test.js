import React from "react";
import { render } from "@testing-library/react";
import Room from "../../app/components/Room";

describe("Room", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Room />);
    expect(getByTestId("Room")).toBeInTheDocument();
  });
});
