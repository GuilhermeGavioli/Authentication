import { LockClosedIcon, UserIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'

//pages
import Login from './pages/Login';
import Register from './pages/Register';
 
//components
import BlobButton from './components/BlobButton';

import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";

export default function App() {
  
  return (
    <>
      <BrowserRouter>
       <Routes>
   
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />

       </Routes>
      </BrowserRouter>

      <BlobButton />
      
      </>

  )
}





