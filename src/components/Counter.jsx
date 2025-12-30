import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="ml-8 text-3xl">Count: {count}</h2>

      <button className="bg-green-500 text-3xl ml-4 p-2 rounded-full" onClick={() => dispatch(increase())}>+</button>
      <button className="bg-red-600 text-3xl ml-4 p-2 rounded-full" onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
};

export default Counter;
