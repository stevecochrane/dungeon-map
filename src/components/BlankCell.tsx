import React from "react";
import toolTypes from "../constants/toolTypes";

type Props = {
  activeTool: string | null;
};

const BlankCell = ({ activeTool }: Props): JSX.Element => {
  let classes = "absolute bg-white inset-0";
  if (activeTool === toolTypes.NOTE || activeTool === toolTypes.ROOM || activeTool === toolTypes.SPONGE) {
    classes += " cursor-pointer duration-300 transition-colors hover:bg-gray-200 hover:transition-none";
  }
  return <div className={classes} data-testid="BlankCell"></div>;
};

export default BlankCell;
