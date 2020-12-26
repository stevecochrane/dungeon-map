import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";
import toolTypes from "../constants/toolTypes";
import Tooltip from "./Tooltip";

const DivWrapper = styled.div(({ activeTool }) => [
  tw`absolute bg-blue-400 inset-0`,
  (activeTool === toolTypes.NOTE || activeTool === toolTypes.ROOM || activeTool === toolTypes.SPONGE) &&
    tw`cursor-pointer`
]);

const DivInner = tw.div`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`;
//  TODO: add vertical-center for: absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
const DivNote = tw.div`bg-yellow-600 h-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 z-40`;

const Note = ({ activeTool }) => (
  <DivWrapper activeTool={activeTool} data-testid="Note">
    <DivInner>
      <DivNote>
        <Tooltip />
      </DivNote>
    </DivInner>
  </DivWrapper>
);

Note.propTypes = {
  activeTool: PropTypes.string
};

Note.defaultProps = {
  activeTool: null
};

export default Note;
