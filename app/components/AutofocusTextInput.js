import React, { useEffect, useRef } from "react";

const AutofocusTextInput = () => {
  const inputElement = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (inputElement.current) {
        inputElement.current.focus();
      }
    }, 1);
  }, []);

  return <input type="text" ref={inputElement} />;
};

export default AutofocusTextInput;
