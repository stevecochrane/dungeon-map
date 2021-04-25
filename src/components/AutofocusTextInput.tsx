import * as React from "react";

const AutofocusTextInput = (props: any) => {
  const inputElement = React.useRef(null);

  React.useEffect(() => {
    window.requestAnimationFrame(() => {
      if (inputElement.current) {
        inputElement.current.focus();
      }
    });
  }, []);

  return <input type="text" data-testid="AutofocusTextInput" ref={inputElement} {...props} />;
};

export default AutofocusTextInput;
