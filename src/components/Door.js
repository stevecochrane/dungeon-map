import React from "react";
import PropTypes from "prop-types";

const Door = ({ orientation }) => {
  let wallClasses = "absolute bg-blue-600 -inset-halfLine z-30";
  let doorClasses = "bg-yellow-600 pointer-events-none vertical-center";

  if (orientation === "vertical") {
    doorClasses += " h-4 w-2";
  } else {
    doorClasses += " h-2 w-4";
  }

  return (
    <div className={wallClasses} data-testid="Door">
      <div className={doorClasses}></div>
    </div>
  );
};

Door.propTypes = {
  orientation: PropTypes.string
};

Door.defaultProps = {
  orientation: "vertical"
};

export default Door;
