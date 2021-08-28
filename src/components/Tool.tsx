import React from "react";

type Props = {
  id: string;
  activeTool: string;
  onToolClick: (id: string) => void;
};

const Tool = ({ id, activeTool, onToolClick }: Props): JSX.Element => {
  const active = id === activeTool;
  let className = "cursor-pointer duration-300 h-12 m-2 rounded transition-colors w-12";

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

export default Tool;
