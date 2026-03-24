import React from "react";

const Buggy = () => {
  throw new Error("Something went wrong");

  return <div>Buggy</div>;
};

export default Buggy;
