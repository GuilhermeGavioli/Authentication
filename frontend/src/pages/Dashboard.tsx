
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Loading from '../components/Loading';

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
      const res = await fetch("https://backendauthentication.herokuapp.com" + "/account/login", {
        headers: {"Content-Type": "application/json", "Authorization": cookies['Authorization-cookie']}
      })
      const data = await res.json();
        if (res.status === 200) {
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
            <h1 className="text-3xl text-white text-center font-bold pt-[15%] h-64">Welcome, {user}!</h1>
            <div className="w-64 m-auto">
                <Button actionFunction={Logout}>Logout</Button>

            </div>
            
            </div>
      
  )
}
