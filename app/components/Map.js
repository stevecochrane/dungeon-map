import React, { useState } from "react";
import PropTypes from "prop-types";
import cellTypes from "../constants/cellTypes";
import Cell from "./Cell";

const Map = ({ activeTool, className, columns, rows }) => {
  let initialMapData = [];
  for (let row = 0; row < rows; row++) {
    initialMapData[row] = [];
    for (let column = 0; column < columns; column++) {
      initialMapData[row][column] = cellTypes.EMPTY;
    }
  }

  const [mapData] = useState(initialMapData);

  return (
    <div className={className} data-testid="Map">
      {mapData.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="Map-row flex justify-center">
            {row.map((column, columnIndex) => {
              let cellProps = {};
              cellProps.cellType = column;
              if (rowIndex === rows - 1) {
                cellProps.hasBottomGap = true;
              }
              if (columnIndex === columns - 1) {
                cellProps.hasRightGap = true;
              }
              return <Cell key={columnIndex} activeTool={activeTool} {...cellProps}></Cell>;
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
