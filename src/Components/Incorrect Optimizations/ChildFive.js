import React from "react";

export const ChildFive = ({ name }) => {
  console.log("ChildFive render");
  return <div>Hello {name}</div>;
};

export const MemoizedChildFive = React.memo(ChildFive);
