import { LockClosedIcon, MailIcon } from '@heroicons/react/solid'

//components
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { useState, createContext } from 'react';
export const LoginDataContext = createContext("LoginDataContext");



export default function Login() {
  const [ loginEmail, setLoginEmail ] = useState("");
  const [ loginPassword, setLoginPassword ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:3001/account/login", {
      method: "POST",
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      headers: {"Content-Type": "application/json"}
    })
    const data = await res.json();
    console.log(data);
    // console.log(loginPassword)
  }

  return (
    <div>
  <div className=" absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col align-middle justify-evenly m-auto w-72 h-80 text-gray-200 blur-none">
      
    <h1 className="font-normal text-3xl text-center mb-5">Login</h1>   
        <Input icon={<MailIcon />} labelText="Email" changeFunction={setLoginEmail}></Input>
    <Input icon={<LockClosedIcon/>} labelText="Password" type="password" changeFunction={setLoginPassword}></Input>
        <Button actionFunction={handleLogin}>Login</Button>
    <p className="text-xs text-center mt-6">Don't have an account already? <Link to="/register" className="text-amber-300 text-sm italic ml-1 :hover">Register now</Link></p>
  </div>
      <div>
        
        </div>
  </div>
  )
}