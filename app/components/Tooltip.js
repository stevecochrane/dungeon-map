import React from "react";

const Tooltip = () => {
  return (
    <div className="absolute inset-0" data-testid="Tooltip">
      <div className="absolute bg-gray-800 h-16 left-1/2 rounded-md top-0 transform -translate-x-1/2 -translate-y-full w-32"></div>
    </div>
  );
};

export default Tooltip;
