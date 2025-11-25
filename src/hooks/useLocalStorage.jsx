import { useState } from "react";

const useLocalStorage=(key,initialState)=>{

    const storedValue=localStorage.getItem(key);

    const[value,setValue]=useState(
        storedValue?JSON.parse(storedValue):initialState
    )

const saveValue=(newValue)=>{

    setValue(newValue);
    localStorage.setItem(key,JSON.stringify(newValue))
}

    return [value, saveValue]
}

export default useLocalStorage;