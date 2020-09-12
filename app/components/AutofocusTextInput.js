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

  return <input type="text" ref={inputElement} {...props} />;
};

export default AutofocusTextInput;
