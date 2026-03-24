import { useRef } from "react";

function ThrottleExample() {
  const lastClick = useRef(0);

  const handleClick = () => {
    const now = Date.now();

    if (now - lastClick.current > 5000) {
      console.log("Button clicked");
      lastClick.current = now;
    }
  };

  return <button className="bg-red-600 rounded-full text-center px-5 py-10 m-10" onClick={handleClick}>Click Me</button>;
}

export default ThrottleExample;
