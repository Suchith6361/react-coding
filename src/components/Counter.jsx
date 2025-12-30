import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/counterSlice";
import { toggleTheme } from "../redux/themeSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.themes.mode);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h2 className="ml-8 text-3xl">Count: {count}</h2>

      <button
        className="bg-green-500 text-3xl ml-4 p-2 rounded-full"
        onClick={() => dispatch(increase())}
      >
        +
      </button>
      <button
        className="bg-red-600 text-3xl ml-4 p-2 rounded-full"
        onClick={() => dispatch(decrease())}
      >
        -
      </button>
      <button
      className="text-2xl bg-yellow-400 p-2 rounded-lg ml-6" onClick={() => dispatch(toggleTheme())}>toggleTheme</button>
    </div>
  );
};

export default Counter;
