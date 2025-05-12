import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const emailRef = useRef();
    function getEmail(e) {
        emailRef.current = e.target.value;
    }

    const passwordRef = useRef();
    function getPassword(e) {
        passwordRef.current = e.target.value;
    }

    return (
        <>
            <header>JUST DO IT</header>
            <form className="login-container">
                <h1 className="title-login">Login</h1>
                <input className='email' onChange={(e) => getEmail(e)} placeholder='Email' required></input>
                <input className='password' onChange={(e) => getPassword(e)} placeholder='Password' required></input>
                <button type='submit' className='login-btn'>Login</button>
                <Link className="signup-link" to="/signup">Sign Up</Link>
            </form>
        </>
    )
}