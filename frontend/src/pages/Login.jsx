import { LockClosedIcon, MailIcon } from '@heroicons/react/solid'

//components
import Input from '../components/Input';
import Button from '../components/Button';
import Loading from '../components/Loading';

import { Link, useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react';
// export const LoginDataContext = createContext("LoginDataContext");

import { Helmet } from 'react-helmet-async';



export default function Login() {
  const [ loginEmail, setLoginEmail ] = useState("");
  const [ loginPassword, setLoginPassword ] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization-cookie'])
  const [pageLoading, setPageLoading] = useState(true);
  
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

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("https://backendauthentication.herokuapp.com" + "/account/login", {
      method: "POST",
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      headers: {"Content-Type": "application/json"}
    })
    const data = await res.json();
    console.log(data);
    if (res.status !== 200) {
      setErrorMessage(data.message)
      alert("error: " + data.message);
    } else {
      setCookie('Authorization-cookie', data.token);
      redirect();
    }

  }

  if (pageLoading) return <Loading />
  
 

  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Have an account already? Login to a better experience in our website." />
        <link rel="canonical" href="/login" />
      </Helmet>
  <form className=" absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-60%] flex flex-col align-middle justify-evenly m-auto w-72 h-80 text-gray-200 blur-none ">
      
    <h1 className="font-normal text-3xl text-center mb-5">Login</h1>   
        <Input icon={<MailIcon />} labelText="Email" changeFunction={setLoginEmail}></Input>
    <Input icon={<LockClosedIcon/>} labelText="Password" type="password" changeFunction={setLoginPassword}></Input>
        <Button actionFunction={handleLogin}>Login</Button>
    <p className="text-xs text-center mt-6">Don't have an account already? <Link to="/register" className="text-amber-300 text-sm font-semibold italic ml-1 :hover">Register now</Link></p>
        {/* <p>{errorMessage}</p> */}
  </form>
      <div>
        </div>
  </div>
  )
}