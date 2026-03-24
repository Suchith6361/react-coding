import React, { useState } from "react";

const StateFunction = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-3xl pl-10 bg-yellow-100">This is state Function</h1>
      <h2 className="text-2xl ml-24">{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-green-500 text-black p-4 rounded-lg ml-4 mr-6"
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="bg-red-500 p-4 rounded-lg text-black"
      >
        Decrease
      </button>
    </div>
  );
};
export default StateFunction;
