import React, { useState, useMemo } from "react";

const SlowFunction = (num) => {
  console.log("Running slow calculation...");

  // simulate heavy CPU work
  for (let i = 0; i < 2000000000; i++) {} 

  return num * 2;
};

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // useMemo caches the result of SlowFunction()
  const doubleValue = useMemo(() => {
    return SlowFunction(number);
  }, [number]); 
  // only re-runs when number changes

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    padding: "20px",
    marginTop: "20px",
  };

  return (
    <div>
      <h2>useMemo Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark(!dark)}>Toggle Theme</button>

      <div style={themeStyles}>
        <h3>Double Value: {doubleValue}</h3>
      </div>
    </div>
  );
};

export default UseMemoExample;
