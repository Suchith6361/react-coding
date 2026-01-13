import React, { Suspense } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CondRend from './pages/CondRendering'
import EventKey from './pages/EventKey'
import FunctionProp from './pages/FunctionProps'
import StateFunction from './pages/StateFunction'
import DisplayName from './components/DisplayName';
import ChangeName from './components/ChangeName';
import ExampleUseEffect2 from './pages/ExampleUseEffect2';
import LocalStorageExample from './pages/LocalStorageExample';
import ButtonParent from './pages/ButtonParent';
import UseMemo from './pages/UseMemo';
import UseRef from './pages/UseRef';
import UseRef2 from './pages/UseRef2';
import Counter from './components/Counter';
import {EnhancedProfile} from './components/EnhancedProfile';
import { EnhancedState } from './components/EnhancedProfile';
import ThrottleExample from './pages/ThrottleExample';
import Debouncing from './pages/Debouncing';

const UseReducer=React.lazy(()=>import('./pages/UseReducer'));
const UseEffect=React.lazy(()=>import('./pages/ExampleUseEffect'));



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
<Route path='/hoc-state' element={<EnhancedState/>}/>

<Route path='/context'  element={<DisplayName/>} />
<Route path='/context2'  element={<ChangeName/>} />
<Route path='/fetch' element={<ExampleUseEffect2/>}/>
<Route path='/local' element={<LocalStorageExample/>} />
<Route path='/UseRed' element={<Suspense fallback={<h1>Loading Reducer ......</h1>}><UseReducer/></Suspense>}/>
<Route path='/callBack' element={<ButtonParent/>} />
<Route path='/useMemo' element={<UseMemo/>}/>
<Route path='/useRef' element={<UseRef/>}/>
<Route path='/useRef2' element={<UseRef2/>}/>
<Route path='/redux' element={<Counter/>}/>
<Route path='/hoc' element={<EnhancedProfile/>}/>
<Route path='/throttle' element={<ThrottleExample/>}/>
<Route path='/debounce' element={<Debouncing/>}/>

  </Routes>
  </Suspense>
  </BrowserRouter>
)
}
export default App;