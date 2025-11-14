import React from 'react';
import { Link } from 'react-router-dom';
 
const Navbar=()=>{
    return(
        <div className='flex flex-row gap-4 bg-slate-900 text-white p-5'>
   <Link to="/FunProp"> <div>FunctionProps</div></Link>
    <Link to="/StateFun"><div>StateFunction</div></Link>
    <Link to="/"><div>UseEffect</div></Link>
    <Link to="/CondRend"><div>ConditionRender</div></Link>
    <Link to="/EventKey"> <div>Eventkey</div></Link>
     <Link to="/UseRed"> <div>UseReducer</div></Link>
     <Link to="/context"><div>UseContext</div></Link>
       <Link to="/context2"><div>UseContext2</div></Link>
        </div>
    )
}
export default Navbar;