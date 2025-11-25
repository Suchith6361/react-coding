import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageExample = () => {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">useLocalStorage Example</h1>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded-lg"
      />

      <p className="mt-4 text-xl">Saved Name: {name}</p>
    </div>
  );
};

export default LocalStorageExample;
