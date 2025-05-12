import { Link } from "react-router-dom";

export default function SignUp() {
    return( 
    <form className="auth-container">
        <input className='email' placeholder='Email' required></input>
        <input className='password' placeholder='Password' required></input>
        <input className='password' placeholder='Re-enter Password' required></input>
        <button type='submit' className='login-btn'>Login</button>
        <Link to="/">Login</Link>
    </form>
    )
}