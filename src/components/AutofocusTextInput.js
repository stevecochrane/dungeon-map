import React, { useEffect, useRef } from "react";

const AutofocusTextInput = props => {
  const inputElement = useRef(null);

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
