import { useState } from "react";

const NameInput = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
};

export default NameInput;
