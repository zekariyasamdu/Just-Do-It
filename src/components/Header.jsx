import { useContext } from 'react'
import '../style/Header.css'
import { loginContext } from '../Context/LoginContext'
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase"


export default function Header() {
    const [login, setLogin] = useContext(loginContext)

    const changeLoginStatus = async()=>{
        try{
        await signOut(auth)
        }catch(e){
            console.log("Error", e)
            return
        }
        setLogin(false)
    }

    return (
        <div className="header">
            <h2 className="name" >Notes</h2>
            <input className="search" placeholder="Search Notes" />
            <div className="user">
                <div className="user-info profile">TU</div>
                <p className="user-info user-name">Test user</p>
                <Link onClick={changeLoginStatus} to='/' className="user-info logout" >Logout</Link>
            </div>

        </div>
    )
}