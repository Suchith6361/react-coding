import React from 'react';

const ButtonChild =({ HandleChange }) => { 
  console.log("Child Rendered"); 

  return (
    <div> 
      <h4>Child Component</h4> 
      <button onClick={HandleChange}>Click Me</button> 
    </div> 
  ); 
}; 

export default ButtonChild;
