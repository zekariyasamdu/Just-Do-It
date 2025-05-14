import { useContext } from 'react'
// contexts
import { loginContext } from '../Context/LoginContext'
// firebase
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase"
// utiles
import { getCurrentUserEmail } from '../utils/utils';
// style
import '../style/Header.css'

export default function Header() {
    const [login, setLogin] = useContext(loginContext)
    const email = getCurrentUserEmail()
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
            <div className="user">
                <p className="user-info user-name">{email}</p>
                <Link onClick={changeLoginStatus} to='/' className="user-info logout" >Logout</Link>
            </div>

        </div>
    )
}