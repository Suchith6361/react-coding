import React from 'react'

const FunctionProps=(details)=>{

    return(
        <div>
            <h1 className='bg-yellow-200 pl-10 text-2xl'>This is Props function</h1>
            <h2>My name is {details.name}</h2>
            <h2>My age is {details.age}</h2>
            <h2>My Gender is {details.gender}</h2>
        </div>
    )

}
export default FunctionProps;