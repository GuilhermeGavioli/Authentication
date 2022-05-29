// import { LockClosedIcon, UserIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'

//pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
 
//components
import BlobButton from './components/BlobButton';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link
  Router
} from "react-router-dom";





export default function App() {
  
 

  return (
    <>
      <BrowserRouter>
       <Routes>
   
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />

       </Routes>
      </BrowserRouter>

      <BlobButton />
      
      </>

  )
}





