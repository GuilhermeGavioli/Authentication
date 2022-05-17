import { LockClosedIcon, UserIcon, MailIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

//components
import Input from '../components/Input';
import Button from '../components/Button';



export default function Register() {

  return (

      
    <div className=" absolute top-[48%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col align-middle justify-evenly m-auto w-72 h-3/5 text-gray-200 blur-none">
      
        <h1 className="font-normal text-3xl text-center mb-5">Register</h1>
        <Input icon={<UserIcon />} labelText="Name"></Input>
        <Input icon={<MailIcon/>} labelText="Email"></Input>
        <Input icon={<LockClosedIcon/>} labelText="Password" type="password"></Input>
        <Button>Register</Button>
        <p className="text-xs text-center mt-6">Have an account already? <Link to="/login" className="text-amber-300 text-sm italic ml-1 :hover">Login</Link></p>
    </div>
         
      
  )
}



  
 
