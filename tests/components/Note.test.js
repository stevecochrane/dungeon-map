import React from "react";
import { render } from "@testing-library/react";
import Note from "../../app/components/Note";

describe("Note", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<Note />);
    expect(getByTestId("Note")).toBeInTheDocument();
  });
});
