import React, { useRef } from "react";

const UseRef = () => {
  const myRef = useRef(null);

  const HandleFocus = () => {
    myRef.current.focus();
  };

  // Basic useRef Example (Focus Input)

  return (
    <div>
      <h1>This is the Example for UseRef Example 1(Dom)</h1>
      <input ref={myRef} type="text" className="bg-gray-600 text-white p-2 m-3 rounded-md" placeholder="Enter the Text" />
      <button
        onClick={HandleFocus}
        className="p-2 rounded-md m-3 text-center text-red-400 bg-black"
      >
        Focus{" "}
      </button>
    </div>
  );
};
export default UseRef;
