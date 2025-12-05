import React, { useCallback, useState } from 'react';
import ButtonChild from './ButtonChild'; 

const ButtonParent = () => {
  const [count, setCount] = useState(0); 

  const HandleChange = useCallback(() => { 
    console.log("Parent function called"); 
  },[]); 

  return ( 
    <div> 
      <h3>Parent Component</h3> 
      <p>Count: {count}</p> 

      <button onClick={() => setCount(count + 1)}>Increase Counter</button> 
      
      {/* Child receives a function as a prop */}
      <ButtonChild HandleChange={HandleChange} /> 
    </div> 
  ); 
}; 

export default ButtonParent;
