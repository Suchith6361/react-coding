import React, { useState ,useRef} from "react";

const UseRef2 = () => {
  const [count, setCount] = useState(0);
  const render=useRef(0);

  render.current=render.current+1;

  //useRef as a Variable (does NOT re-render)

  return (
    <div>
      <div className="text-3xl">This Is UseRef 2</div>
      <div className="text-3xl ml-16">{count}</div>
      <div>{render.current} Times</div>
      <button className="bg-green-400 text-white p-2 rounded-full ml-10"  onClick={() => setCount(count + 2)}>Increase</button>
    </div>
  );
};
export default UseRef2;
