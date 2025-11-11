

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


import React,{useReducer} from 'react'


const UseReducer=()=>{

  return(
    <div>
      <h1>Hey Reducer</h1>
    </div>
  )
}
export default UseReducer;

