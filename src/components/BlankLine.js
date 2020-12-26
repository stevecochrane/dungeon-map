import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import toolTypes from "../constants/toolTypes";

const DivWrapper = tw.div`absolute inset-0`;
const DivInactive = tw.div`absolute bg-gray-400 inset-0 z-10`;

const DivActive = styled.div(({ activeTool }) => [
  tw`absolute bg-gray-600 duration-300 -inset-halfLine opacity-0 transition-opacity z-20`,
  (activeTool === toolTypes.DOOR || activeTool === toolTypes.WALL) && tw`group-hover:(opacity-100 transition-none)`
]);

const BlankLine = ({ activeTool }) => (
  <DivWrapper data-testid="BlankLine">
    <DivInactive />
    <DivActive activeTool={activeTool} />
  </DivWrapper>
);

BlankLine.propTypes = {
  activeTool: PropTypes.string
};

BlankLine.defaultProps = {
  activeTool: null
};

export default BlankLine;
