import React from "react";
import PropTypes from "prop-types";

const Tool = ({ id, activeTool, onToolClick }) => {
  const active = id === activeTool;
  let className = "w-12 h-12 m-2 cursor-pointer transition-bg";

  if (active) {
    className += " bg-yellow-400";
  } else {
    className += " bg-yellow-200 hover:bg-yellow-400";
  }

  return (
    <div
      className={className}
      data-active={active}
      data-id={id}
      data-testid="Tool"
      onMouseDown={() => onToolClick(id)}
    ></div>
  );
};

Tool.propTypes = {
  id: PropTypes.string,
  activeTool: PropTypes.string,
  onToolClick: PropTypes.func
};

export default Tool;
