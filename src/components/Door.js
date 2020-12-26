import React from "react";
import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const DivWall = tw.div`absolute bg-blue-600 -inset-halfLine z-30`;

//  TODO: add vertical-center for: absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
const DivDoor = styled.div(({ orientation }) => [
  tw`bg-yellow-600 pointer-events-none absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`,
  orientation === "vertical" ? tw`h-4 w-2` : tw`h-2 w-4`
]);

const Door = ({ orientation }) => (
  <DivWall data-testid="Door">
    <DivDoor orientation={orientation} />
  </DivWall>
);

Door.propTypes = {
  orientation: PropTypes.string
};

Door.defaultProps = {
  orientation: "vertical"
};

export default Door;
