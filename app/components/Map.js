import React, { useState } from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import tileTypes from "../constants/tileTypes";

const Map = ({ activeTool, className, columns, rows }) => {
  let initialMapData = [];
  for (let row = 0; row < rows; row++) {
    initialMapData[row] = [];
    for (let column = 0; column < columns; column++) {
      initialMapData[row][column] = tileTypes.EMPTY;
    }
  }

  const [mapData] = useState(initialMapData);

  return (
    <div className={className} data-testid="Map">
      {mapData.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="Map-row flex justify-center">
            {row.map((column, columnIndex) => {
              let tileProps = {};
              tileProps.tileType = column;
              if (rowIndex === rows - 1) {
                tileProps.hasBottomGap = true;
              }
              if (columnIndex === columns - 1) {
                tileProps.hasRightGap = true;
              }
              return <Tile key={columnIndex} activeTool={activeTool} {...tileProps} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

Map.propTypes = {
  activeTool: PropTypes.string,
  className: PropTypes.string,
  columns: PropTypes.number,
  rows: PropTypes.number
};

export default Map;
