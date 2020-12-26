import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Div = styled.div(({ active }) => [
  tw`cursor-pointer duration-300 h-12 m-2 rounded transition-colors w-12`,
  active ? tw`bg-yellow-400` : tw`bg-yellow-200 hover:bg-yellow-400`
]);

const Tool = ({ id, activeTool, onToolClick }) => (
  <Div
    active={id === activeTool}
    data-active={id === activeTool}
    data-id={id}
    data-testid="Tool"
    onMouseDown={() => onToolClick(id)}
  ></Div>
);

Tool.propTypes = {
  id: PropTypes.string,
  activeTool: PropTypes.string,
  onToolClick: PropTypes.func
};

export default Tool;
