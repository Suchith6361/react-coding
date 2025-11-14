

/*        Using useState                     */
/*  
import { useState } from "react"
 
const UseReducer=()=>{
  const[data,setData]=useState(
    {"name":'',
      "age":'',
      "gender":''
    }
  )

  const resetChange=()=>{
  setData(
     {"name":'',
      "age":'',
      "gender":''
    }
  )
  }

  const handleChange=(field,value)=>{
setData((prev)=>({...prev,[field]:value}))

  }
  console.log(data);
  return(
    <div>
      <div>
   <input type="text" placeholder="Name" name="" id="" value={data.name} onChange={(e)=>handleChange("name",e.target.value)} />
   <input type="text" placeholder="Age" onChange={(e)=>handleChange("age",e.target.value)} value={data.age} />
   <input type="text" placeholder="Gender" name="" id="" onChange={(e)=>handleChange("gender",e.target.value)} value={data.gender} />
        
      </div>
<pre>{JSON.stringify(data,null,2)}</pre>

<button onClick={resetChange} className="text-white px-4 py-1 bg-red-800 ml-2 rounded-lg">Reset</button>

    </div>
  )

}
export default UseReducer;
                                  */


//    Using useReducer

import { type } from '@testing-library/user-event/dist/type';
import React, { act } from 'react'
import { useReducer } from 'react';

const initialState={
  "name":"",
  "age":"",
  "gender":""
}

const updation=(state,action)=>{
  switch(action.type){
    case "UPDATE":
      return{
 ...state,[action.field]:action.value
      };
    case "RESET":
      return initialState
      
  }
}

const UseReducer=()=>{

  const[data,dispatch]=useReducer(updation,initialState);

const handleChange=(field,value)=>{
  dispatch({type:"UPDATE",field,value})
}


  return(
  <div>

  <div>
        <input
          type="text"
          placeholder="Name"
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={data.age}
          onChange={(e) => handleChange("age", e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={data.gender}
          onChange={(e) => handleChange("gender", e.target.value)}
        />
      </div>

      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>


  </div>
)
}

export default UseReducer;
