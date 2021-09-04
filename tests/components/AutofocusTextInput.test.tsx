import React from "react";
import { render } from "@testing-library/react";
import AutofocusTextInput from "../../src/components/AutofocusTextInput";

describe("AutofocusTextInput", () => {
  test("Renders with no props", () => {
    const { getByTestId } = render(<AutofocusTextInput />);
    expect(getByTestId("AutofocusTextInput")).toBeInTheDocument();
  });
});
