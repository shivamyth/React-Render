import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
  console.log("ChildA render");
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  );
};
export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("ChildB render");
  return (
    <>
      <div>Child B</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("ChildC render");
  return (
    <>
      <div>Child C count = {count}</div>
    </>
  );
};
