import React, { useState } from "react";
import AutofocusTextInput from "./AutofocusTextInput";

const Tooltip = (): JSX.Element => {
  const [tooltipText, setTooltipText] = useState<string | null>(null);

  const checkEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      finishEdit(event);
    }
  };

  const finishEdit = (event: React.FocusEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setTooltipText(target.value);
  };

  return (
    <div className="absolute group inset-0" data-testid="Tooltip">
      <div
        className="absolute bg-gray-800 duration-300 flex justify-center left-1/2 opacity-0 pointer-events-none px-4 py-2 rounded-md text-gray-200 top-0 transform transition-all -translate-x-1/2 -translate-y-3/2 w-56 group-hover:opacity-100 group-hover:-translate-y-full group-hover:transition-none"
        style={{ marginTop: "-0.5rem" }}
      >
        {tooltipText ? (
          <span>{tooltipText}</span>
        ) : (
          <AutofocusTextInput handleBlur={finishEdit} handleKeyPress={checkEnter} />
        )}
        <div
          className="absolute border-gray-800 bottom-0 h-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0"
          style={{
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderWidth: "0.5rem 0.5rem 0 0.5rem"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Tooltip;
