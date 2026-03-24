import React, { useContext } from "react";
import { MyContext } from "../context/UserContext";

const ChangeName = () => {
  const { setUser } = useContext(MyContext);
  const {user}=useContext(MyContext)

  return (
    <div className="p-4 bg-blue-100 text-center">
      <h2 className="text-xl font-bold">Change Name Component</h2>
      <input
        type="text"
        placeholder="Enter new name"
        onChange={(e) => setUser(e.target.value)}
        className="border p-2 rounded mt-2"
      />
      <h1>Changed Name is {user}</h1>
    </div>
  );
};

export default ChangeName;
