import React, { useState } from "react";
import PropTypes from "prop-types";
import tw from "twin.macro";
import cellTypes from "../constants/cellTypes";
import Cell from "./Cell";

const DivWrapper = tw.div`flex flex-grow flex-col justify-center`;
const DivRow = tw.div`flex justify-center`;

const Map = ({ activeTool, columns, isMouseDown, rows }) => {
  let initialMapData = [];
  for (let row = 0; row < rows; row++) {
    initialMapData[row] = [];
    for (let column = 0; column < columns; column++) {
      initialMapData[row][column] = cellTypes.EMPTY;
    }
  }

  const [mapData] = useState(initialMapData);

  return (
    <DivWrapper data-testid="Map">
      {mapData.map((row, rowIndex) => {
        return (
          <DivRow key={rowIndex}>
            {row.map((column, columnIndex) => {
              let cellProps = {};
              cellProps.cellType = column;
              if (rowIndex === rows - 1) {
                cellProps.hasBottomLine = true;
              }
              if (columnIndex === columns - 1) {
                cellProps.hasRightLine = true;
              }
              return <Cell activeTool={activeTool} isMouseDown={isMouseDown} key={columnIndex} {...cellProps}></Cell>;
            })}
          </DivRow>
        );
      })}
    </DivWrapper>
  );
};

Map.propTypes = {
  activeTool: PropTypes.string,
  columns: PropTypes.number,
  isMouseDown: PropTypes.bool,
  rows: PropTypes.number
};

export default Map;
