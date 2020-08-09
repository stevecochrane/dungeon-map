import React from "react";

const Tooltip = () => {
  return (
    <div className="absolute group inset-0" data-testid="Tooltip">
      <div
        className="absolute bg-gray-800 duration-300 left-1/2 opacity-0 pointer-events-none px-4 py-2 rounded-md text-center text-gray-200 top-0 transform transition-all -translate-x-1/2 -translate-y-3/2 w-56 group-hover:opacity-100 group-hover:-translate-y-full group-hover:transition-none"
        style={{ marginTop: "-0.5rem" }}
      >
        {"Hello this is a message"}
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