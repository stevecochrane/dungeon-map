import React, { useEffect, useRef } from "react";

const AutofocusTextInput = () => {
  const inputElement = useRef(null);

  useEffect(() => {
    window.requestAnimationFrame(() => {
      if (inputElement.current) {
        inputElement.current.focus();
      }
    });
  }, []);

  return <input type="text" ref={inputElement} />;
};

export default AutofocusTextInput;
