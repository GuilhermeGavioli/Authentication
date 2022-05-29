
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Loading from '../components/Loading';

import { Helmet } from 'react-helmet-async';

export default function Dashboard() {

  
    const [cookies, setCookie, removeCookie] = useCookies(['Authorization-cookie'])
    const [user, setUser] = useState("");
    const [pageLoading, setPageLoading] = useState(true);
  
  const navigate = useNavigate();
    const redirect = () => navigate("/login");
    
    function Logout() { 
        removeCookie("Authorization-cookie");
        redirect();
    }
  
  useEffect(() => {
    async function check() {
        if (await cookies['Authorization-cookie'] === undefined) redirect();
      const res = await fetch("https://backendauthentication.herokuapp.com" + "/account/checktoken", {
        headers: {"Content-Type": "application/json", "Authorization": cookies['Authorization-cookie']}
      })
      const data = await res.json();
      if (data.isTokenValid) {
            setUser(data.body.user.email.split('@')[0])
            return
        }
        redirect();
    }
      check();
      setPageLoading(false);
  }, [])

    if (pageLoading) return <Loading/>
    
    

  return (
      
     
    <div>
      
      <Helmet>
        <title>Welcome, {user}!</title>
        <meta name="description" content="Dashboard / profile page restrict only for loged in users in our website." />
        <meta name="robots" content="noindex" />
        
        <link rel="canonical" href="/dashboard" />
      </Helmet>

            <h1 className="text-3xl text-white text-center font-bold pt-[15%] h-64">Welcome, {user}!</h1>
            <div className="w-64 m-auto">
                <Button actionFunction={Logout}>Logout</Button>

            </div>
            
            </div>
      
  )
}
