import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { loginContext } from "../../Context/LoginContext";
import { auth } from "../../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { removeDefault } from "../../utils/utils"


export default function Login() {
    const [login, setLogin] = useContext(loginContext)
    const emailRef = useRef();

    function getEmail(e) {
        emailRef.current = e.target.value;
    }

    const passwordRef = useRef();
    function getPassword(e) {
        passwordRef.current = e.target.value;
    }

    const [loginMessage, setLoginMessage] = useState(false);
    const [loginError, setLoginError] = useState(false);


    const Login = async (e) => {
        removeDefault(e)
        try {
            setLoginMessage(true)
            await signInWithEmailAndPassword(auth, emailRef.current, passwordRef.current)

        } catch (e) {
            setLoginMessage(false)
            setLoginError(true)
            setTimeout(()=>{setLoginError(false)}, 3000)
            console.log("error", e)
            return
        }
        setLogin(true)
    }



    return (
        <>
            <header>JUST DO IT</header>
            <form className="login-container">
                <h1 className="title-login">Login</h1>
                {loginMessage && <p>Logging in...</p>}
                {loginError && <p>error....something went wrong</p>}
                <input type="email" className='email'
                    onChange={(e) => getEmail(e)}
                    placeholder='Email'
                    required></input>
                <input type="password" className='password'
                    onChange={(e) => getPassword(e)}
                    placeholder='Password'
                    required></input>
                <button type='submit'
                    onClick={(e) => Login(e)}
                    className='login-btn'>login</button>
                <Link className="signup-link" to="/signup">Sign Up</Link>
            </form>
        </>
    )
}