import React from "react";
import { render } from "@testing-library/react";
import EmptyGap from "../../app/components/EmptyGap";

describe("EmptyGap", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<EmptyGap />);
    expect(getByTestId("EmptyGap")).toBeInTheDocument();
  });
});
