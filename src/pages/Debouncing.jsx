import React, { useEffect, useRef, useState } from "react";

const Debouncing = () => {
  const [name, setName] = useState("");
  const debounceTimer = useRef(null);

  useEffect(() => {
    // Clear previous timer
    clearTimeout(debounceTimer.current);

    // Start new timer
    debounceTimer.current = setTimeout(() => {
      console.log("Debounced value:", name);
    }, 2000);

    // Cleanup (important)
    return () => clearTimeout(debounceTimer.current);
  }, [name]);

  return (
    <div className="m-6" >
      <div className="text-2xl mb-2">Debouncing</div>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-yellow-200 p-2"
          type="text"
        />
      </div>
    </div>
  );
};

export default Debouncing;
