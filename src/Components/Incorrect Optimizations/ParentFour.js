import React, { useMemo, useState, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vishwas");
  const person = {
    fname: "Shivam",
    lname: "Mishra",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("Parent Four Render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Codevolution")}>Change name </button>
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  );
};
