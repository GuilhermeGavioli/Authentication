import { LockClosedIcon, MailIcon } from '@heroicons/react/solid'

//components
import Input from '../components/Input';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


export default function Login() {

  return (
<>
  <div className=" absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col align-middle justify-evenly m-auto w-72 h-80 text-gray-200 blur-none">
      
    <h1 className="font-normal text-3xl text-center mb-5">Login</h1>   
    <Input icon={<MailIcon/>} labelText="Email"></Input>
    <Input icon={<LockClosedIcon/>} labelText="Password" type="password"></Input>
    <Button>Login</Button>
    <p className="text-xs text-center mt-6">Don't have an account already? <Link to="/register" className="text-amber-300 text-sm italic ml-1 :hover">Register now</Link></p>
  </div>
      <div>
        
        </div>
  </>
  )
}