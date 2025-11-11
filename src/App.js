import React, { Suspense } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CondRend from './components/CondRendering'
import EventKey from './components/EventKey'
import FunctionProp from './components/FunctionProps'
import StateFunction from './components/StateFunction'

const UseReducer=React.lazy(()=>import('./components/UseReducer'));
const UseEffect=React.lazy(()=>import('./components/ExampleUseEffect'));



const App=()=>{
return(
  <BrowserRouter>
  <Navbar/>
  {/*Global Suspense applied for all routes*/}
<Suspense fallback={<p>loading...</p>}>   
  <Routes>
<Route path='/CondRend' element={<CondRend/>}/>
<Route path='/EventKey' element={<EventKey/>}/>
<Route path='/' element={<UseEffect/>}/>
<Route path='/FunProp' element={<FunctionProp name='Ganesh' age='28' gender='Male'/>}/>
<Route path='/StateFun' element={<StateFunction/>}/>


<Route path='/UseRed' element={<Suspense fallback={<h1>Loading Reducer ......</h1>}><UseReducer/></Suspense>}/>

  </Routes>
  </Suspense>
  </BrowserRouter>
)
}
export default App;