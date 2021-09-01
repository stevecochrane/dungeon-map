import React, { useEffect, useRef } from "react";

type Props = {
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const AutofocusTextInput = ({ handleBlur, handleKeyPress }: Props): JSX.Element => {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (inputElement.current) {
        inputElement.current.focus();
      }
    });
  }, []);

  return (
    <input
      type="text"
      className="text-gray-800"
      data-testid="AutofocusTextInput"
      ref={inputElement}
      onBlur={handleBlur}
      onKeyPress={handleKeyPress}
    />
  );
};

export default AutofocusTextInput;
