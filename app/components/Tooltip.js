import React from "react";

const Tooltip = () => {
  return (
    <div className="absolute inset-0" data-testid="Tooltip">
      <div className="absolute bg-gray-800 left-1/2 px-4 py-2 rounded-md text-center text-gray-200 top-0 transform -translate-x-1/2 -translate-y-full w-56">
        {"Hello this is a message"}
      </div>
    </div>
  );
};

export default Tooltip;
