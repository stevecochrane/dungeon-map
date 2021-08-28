import React from "react";

type Props = {
  orientation: string;
};

const Door = ({ orientation = "vertical" }: Props): JSX.Element => {
  const wallClasses = "absolute bg-blue-600 -inset-halfLine z-30";
  let doorClasses = "bg-yellow-600 pointer-events-none vertical-center";

  if (orientation === "vertical") {
    doorClasses += " h-4 w-2";
  } else {
    doorClasses += " h-2 w-4";
  }

  return (
    <div className={wallClasses} data-testid="Door">
      <div className={doorClasses}></div>
    </div>
  );
};

export default Door;
