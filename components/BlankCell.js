import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import toolTypes from "../constants/toolTypes";

const Div = styled.div(({ activeTool }) => [
  tw`absolute bg-white inset-0`,
  (activeTool === toolTypes.NOTE || activeTool === toolTypes.ROOM || activeTool === toolTypes.SPONGE) &&
    tw`cursor-pointer duration-300 transition-colors hover:(bg-gray-200 transition-none)`
]);

const BlankCell = ({ activeTool }) => <Div activeTool={activeTool} data-testid="BlankCell"></Div>;

BlankCell.propTypes = {
  activeTool: PropTypes.string
};

BlankCell.defaultProps = {
  activeTool: null
};

export default BlankCell;
