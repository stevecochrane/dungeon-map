import React from "react";
import cellTypes from "../constants/cellTypes";
import Cell from "./Cell";

type Props = {
  activeTool: string;
  className: string;
  columns: number;
  isMouseDown: boolean;
  rows: number;
};

const Map = ({ activeTool, className, columns, isMouseDown, rows }: Props): JSX.Element => {
  const mapData: string[][] = [];
  for (let row = 0; row < rows; row++) {
    mapData[row] = [];
    for (let column = 0; column < columns; column++) {
      mapData[row][column] = cellTypes.EMPTY;
    }
  }

  return (
    <div className={className} data-testid="Map">
      {mapData.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="Map-row flex justify-center">
            {row.map((column, columnIndex) => {
              const hasBottomLine = rowIndex === rows - 1;
              const hasRightLine = columnIndex === columns - 1;
              return (
                <Cell
                  activeTool={activeTool}
                  isMouseDown={isMouseDown}
                  key={columnIndex}
                  cellType={column}
                  hasBottomLine={hasBottomLine}
                  hasRightLine={hasRightLine}
                ></Cell>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Map;
