import { Link } from "react-router-dom";
import { useRef } from "react";


export default function SignUp() {

    const emailRef = useRef();
    function getEmail(e) {
        emailRef.current = e.target.value;
    }

    const passwordRef = useRef();
    function getPassword(e) {
        passwordRef.current = e.target.value;
    }

    const repasswordRef = useRef();
    function getRePassword(e) {
        repasswordRef.current = e.target.value;
    }

    return (
        <>
            <header>JUST DO IT</header>
            <form className="sign-container">
                <h1 className="title-signup">Signup</h1>
                <input className='email' onChange={(e) => getEmail(e)} placeholder='Email' required></input>
                <input className='password' onChange={(e) => getPassword(e)} placeholder='Password' required></input>
                <input className='password' onChange={(e) => getRePassword(e)} placeholder='Re-enter Password' required></input>
                <button type='submit' className='login-btn'>Login</button>
                <Link className="login-link" to="/">Login</Link>
            </form>
        </>

    )
}