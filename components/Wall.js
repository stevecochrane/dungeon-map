import React from "react";
import tw from "twin.macro";

const Div = tw.div`absolute bg-blue-600 -inset-halfLine z-30`;

const Wall = () => <Div data-testid="Wall"></Div>;

export default Wall;
