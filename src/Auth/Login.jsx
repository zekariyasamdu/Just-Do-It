import { Link } from "react-router-dom";
export default function Login() {
    return (
        <>
            <form className="login-container">
                <input className='email' placeholder='Email' required></input>
                <input className='password' placeholder='Password' required></input>
                <button type='submit' className='login-btn'>Login</button>
                <Link to="/signup">Sign Up</Link>
            </form>
        </>
    )
}