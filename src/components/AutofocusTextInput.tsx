import React, { useEffect, useRef } from "react";

const AutofocusTextInput = (props: any): JSX.Element => {
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (inputElement.current) {
        inputElement.current.focus();
      }
    });
  }, []);

  return <input type="text" data-testid="AutofocusTextInput" ref={inputElement} {...props} />;
};

export default AutofocusTextInput;
