import React, { useState } from "react";

const CondRendering = () => {
  const [show, setShow] = useState(true);

  const HandleChange = () => {
    setShow(!show);
  };

  return (
    <div className="items-center text-center">
      <h1 className="bg-yellow-200 p-2">This is Condition Rendering</h1>
<button className="text-1xl mt-6" onClick={HandleChange}>
  {
    show?<div className="text-black bg-red-500 rounded-lg p-1
    ">HIDE</div > :<div className="text-black bg-green-500 rounded-lg p-1
    ">SHOW</div>
  }
</button>

{
  show?<div className="text-green-500">Display is Showing</div>:
  <div className="text-red-500">Display is Not showing</div>
}
    </div>
  );
};

export default CondRendering;
