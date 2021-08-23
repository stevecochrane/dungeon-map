import React from "react";
import toolTypes from "../constants/toolTypes";

type Props = {
  activeTool?: string
};

const Room: React.FC<Props> = ({ activeTool }) => {
  let classes = "absolute bg-blue-400 inset-0";
  if (activeTool === toolTypes.NOTE || activeTool === toolTypes.ROOM || activeTool === toolTypes.SPONGE) {
    classes += " cursor-pointer";
  }
  return <div className={classes} data-testid="Room"></div>;
};

export default Room;
