import React, { useContext } from "react";
import { MyContext } from "../context/UserContext";

const DisplayName = () => {
  const { user } = useContext(MyContext);

  return (
    <div className="p-4 bg-green-100 text-center">
      <h2 className="text-xl font-bold">Display Name Component</h2>
      <p className="text-lg text-green-700 mt-2">Current User: {user}</p>
    </div>
  );
};

export default DisplayName;
