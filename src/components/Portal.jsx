import React,{useState} from 'react'
import Popup from '../pages/Popup';


const Portal = () => {
    const[show,setShow]=useState(false);

  return (
    <div>
        <div>This is Portal main page</div>
             <button onClick={() => setShow(true)}>Show Popup</button>
             {show && <Popup onClose={() => setShow(false)} />}

    </div>
  )
}


export default Portal