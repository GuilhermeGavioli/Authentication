import { LockClosedIcon, UserIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  


  return (
    <Router>
      <Switch>
   
    <div className=" absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col align-middle justify-evenly m-auto w-72 h-64 text-gray-200 blur-none">
      <h1 className="font-normal text-3xl text-center mb-5">Login</h1>

      <Input icon={<UserIcon/>} labelText="Email"></Input>
  
      <Input icon={<LockClosedIcon/>} labelText="Password" type="password"></Input>
    
      <Button>Login</Button>
    </div>
      <BlobButton></BlobButton>
    
        <Route path="login"></Route>
        
        
      </Switch>
    </Router>

)}

interface IButtonProps { 
  children: string;
}

function BlobButton() {
  return <button className="flex align-middle w-16 h-16 bg-gradient-to-br from-sky-600 to-sky-400 rounded-full fixed bottom-8 right-8 animate-bounce shadow-sky-700/70 shadow-md group
  hover:w-36
  hover:h-12
  hover:bg-amber-500
  ease-out duration-300" >
    <span className="w-10 m-auto text-gray-200 group-hover:float-left text-3xl font-extrabold" >?</span><div className="align-middle"></div></button>
}


function Button({ children }: IButtonProps) { 
  return <button className=" bg-gradient-to-br from-sky-600 to-sky-400 px-4 text-xl py-2 font-bold rounded-3xl w-full mt-2 relative scale-100
  hover:scale-110 ease-in duration-150 group shadow-sky-700/70 shadow-md">
    <div className="w-full ease-in-out duration-300 float-none overflow-clip
    group-hover:w-2
    group-hover:float-right
    group-hover:overflow-hidden
    ">{children}</div>
    <div className="z-0 w-5 h-[100%]  bg-pink-500 absolute top-0 left-0 rounded-l-3xl ease-in-out duration-300 flex align-middle
    group-hover:w-64
    group-hover:rounded-3xl
    group-hover:bg-gradient-to-r from-pink-500 to-amber-500
    "><ChevronDoubleRightIcon className="w-6 m-auto invisible group-hover:visible" /></div>
  </button>
}

interface IInputProps { 
  labelText: string;
  icon?: any;
  type?: string;
}

function Input({ labelText, icon, type }: IInputProps) { 
  return (
    <div className="flex">

      <span className=" w-10 flex align-middle bg-gray-100/[90%] text-gray-500 px-2 "> {icon} </span>
      

      <input type={type || "text"} className=" 
    placeholder-gray-500  text-sm font-medium 
    w-full h-10 bg-gray-100/[90%] px-4 py-4 rounded-sm text-gray-600" placeholder={labelText}>
    </input>
      
    </div>

  )
}

export default App
