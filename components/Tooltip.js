import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import AutofocusTextInput from "./AutofocusTextInput";

const DivOuterWrapper = tw.div`absolute inset-0`;

const DivInnerWrapper = styled.div(() => [
  tw`absolute bg-gray-800 duration-300 flex justify-center left-1/2 opacity-0 pointer-events-none px-4 py-2 rounded-md text-gray-200 top-0 transform transition-all -translate-x-1/2 -translate-y-3/2 w-56 group-hover:(opacity-100 -translate-y-full transition-none)`,
  "margin-top: -0.5rem"
]);

const DivCaret = styled.div(() => [
  tw`absolute border-gray-800 bottom-0 h-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0`,
  "border-left-color: transparent",
  "border-right-color: transparent",
  "border-width: 0.5rem 0.5rem 0 0.5rem"
]);

const Tooltip = () => {
  const [tooltipText, setTooltipText] = useState(null);

  const checkEnter = event => {
    if (event.key === "Enter") {
      finishEdit(event);
    }
  };

  const finishEdit = event => {
    setTooltipText(event.target.value);
  };

  return (
    <DivOuterWrapper className="group" data-testid="Tooltip">
      <DivInnerWrapper>
        {tooltipText ? (
          <span>{tooltipText}</span>
        ) : (
          <AutofocusTextInput className="text-gray-800" onBlur={finishEdit} onKeyPress={checkEnter} />
        )}
        <DivCaret />
      </DivInnerWrapper>
    </DivOuterWrapper>
  );
};

export default Tooltip;
