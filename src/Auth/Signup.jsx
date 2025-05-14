import { Link } from "react-router-dom";
import { useRef } from "react";
import { removeDefault } from "../utils/utils"
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc } from "firebase/firestore";
import { noteCollections } from "../config/firebase";

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

    const Signin = async (e) => {
        removeDefault(e)
        if (passwordRef.current === repasswordRef.current) {
            try {
                const userCredential  = await createUserWithEmailAndPassword(auth, emailRef.current, passwordRef.current)
                const user = userCredential.user
                await addDoc(noteCollections, {
                    id: user.uid
                })
            }
            catch (e) {
                console.log("error", e)
            }
            finally {
                return;
            }
        }
        console.log("not matching")
    }


    return (
        <>
            <header>JUST DO IT</header>
            <form className="sign-container">
                <h1 className="title-signup">Signup</h1>
                <input type="email" className='email' onChange={(e) => getEmail(e)} placeholder='Email' required></input>
                <input type="password" className='password' onChange={(e) => getPassword(e)} placeholder='Password' required></input>
                <input type="password" className='password' onChange={(e) => getRePassword(e)} placeholder='Re-enter Password' required></input>
                <button type='submit' className='signup-btn' onClick={(e) => Signin(e)}>signup</button>
                <Link className="login-link" to="/login">Login</Link>
            </form>
        </>

    )
}