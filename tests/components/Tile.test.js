import React from "react";
import { render } from "@testing-library/react";
import Tile from "../../app/components/Tile";

describe("Tile", () => {

  test("Renders with no props", () => {
    const { getByTestId } = render(<Tile />);
    expect(getByTestId("Tile")).toBeInTheDocument();
  });

});
