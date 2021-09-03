import React from "react";
import { render } from "@testing-library/react";
import Map from "../../src/components/Map";

describe("Map", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Map />);
    expect(getByTestId("Map")).toBeInTheDocument();
  });
});
