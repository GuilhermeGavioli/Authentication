import { LockClosedIcon, UserIcon, MailIcon } from '@heroicons/react/solid'
import { Link, useNavigate } from 'react-router-dom';

//components
import Input from '../components/Input';
import Button from '../components/Button';
import Loading from '../components/Loading';

import { useCookies } from 'react-cookie';

import { Helmet } from 'react-helmet-async';

import { useState, useEffect } from 'react';

export default function Register() {
  const [ registerName, setRegisterName ] = useState("");
  const [ registerEmail, setRegisterEmail ] = useState("");
  const [ registerPassword, setRegisterPassword ] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [pageLoading, setPageLoading] = useState(true);

  const [cookies, setCookie, removeCookie] = useCookies(['Authorization-cookie'])
  
  
  const navigate = useNavigate();
  const redirect = () => navigate("/dashboard");

  useEffect(() => {
    async function check() {
      if (await cookies['Authorization-cookie'] === undefined) return;
      const res = await fetch("https://backendauthentication.herokuapp.com" + "/account/checktoken", {
        headers: {"Content-Type": "application/json", "Authorization": cookies['Authorization-cookie']}
      })
      const data = await res.json();
      if (data.isTokenValid) return redirect();
      return
    }

    check();
    setPageLoading(false);
  }, [])



  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch("https://backendauthentication.herokuapp.com" + "/account/register", {
      method: "POST",
      body: JSON.stringify({ name: registerName, email: registerEmail, password: registerPassword }),
      headers: {"Content-Type": "application/json"}
    })
    const data = await res.json();
    console.log(data);
    if (res.status !== 200) {
      setErrorMessage(data.body.message)
      alert("error: " + data.body.message);
    } else {
      setCookie('Authorization-cookie', data.token);
      redirect();
    }
  }

  if (pageLoading) return <Loading />
  

  return (

      
    <form className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col align-middle justify-evenly m-auto w-72 h-96 text-gray-200 blur-none ">

      
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Do not have an account on our website? Register now." />
        <link rel="canonical" href="/register" />
      </Helmet>
{/* absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col align-middle justify-evenly m-auto w-72 h-80 text-gray-200 blur-none"> */}
      
        <h1 className="font-normal text-3xl text-center mb-5">Register</h1>
        <Input icon={<UserIcon />} labelText="Name" changeFunction={setRegisterName}></Input>
        <Input icon={<MailIcon/>} labelText="Email" changeFunction={setRegisterEmail}></Input>
        <Input icon={<LockClosedIcon/>} labelText="Password" type="password" changeFunction={setRegisterPassword}></Input>
        <Button actionFunction={handleRegister}>Register</Button>
        <p className="text-xs text-center mt-6">Have an account already? <Link to="/login" className="text-amber-300 text-sm font-semibold italic ml-1 :hover">Login</Link></p>
    </form>
         
 
  )
}



  
 
