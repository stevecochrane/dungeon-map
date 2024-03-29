import React from "react";
import toolTypes from "../constants/toolTypes";

type Props = {
  activeTool: string | null;
};

const BlankLine = ({ activeTool }: Props): JSX.Element => {
  const wrapperClasses = "absolute inset-0";
  const inactiveClasses = "absolute bg-gray-400 inset-0 z-10";
  let activeClasses = "absolute bg-gray-600 duration-300 -inset-halfLine opacity-0 transition-opacity z-20";

  if (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) {
    activeClasses += " group-hover:opacity-100 group-hover:transition-none";
  }

  return (
    <div className={wrapperClasses} data-testid="BlankLine">
      <div className={inactiveClasses}></div>
      <div className={activeClasses}></div>
    </div>
  );
};

export default BlankLine;
