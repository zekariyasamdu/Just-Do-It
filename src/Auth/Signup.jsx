import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// firestore
import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc } from "firebase/firestore";
import { noteCollections } from "../config/firebase";
// utils 
import { removeDefault } from "../utils/utils"

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


    
    const [creating, setCreatingAccount] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const Signin = async (e) => {
        removeDefault(e);
        if (passwordRef.current === repasswordRef.current) {
            try {
                console.log('creating account')
                setCreatingAccount(true)
                const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current, passwordRef.current)
                const user = userCredential.user
                setCreatingAccount(false)
                setSuccess(true)
                setTimeout(()=>{setSuccess(false)}, 3000)
                await addDoc(noteCollections, {
                    id: user.uid
                })
                console.log('created aaccount')
            }
            catch (e) {
                setCreatingAccount(false)
                setError(true);
                setTimeout(setError(false), 3000)
                console.log("something went wrong")
                console.log("error", e)
            }
            finally {
                return;
            }
        } else {
            console.error("not matching")
        }
    }

    return (
        <>
            <header>JUST DO IT</header>
            <form className="sign-container">

                <h1 className="title-signup">Signup</h1>
                {creating && <p className="creating-account">creating account..</p>}
                {error && <p className="sigup-error">error..something went wrong</p>}
                {success && <p className="created-account">account created successfully!</p>}

                <input type="email" className='email'
                    onChange={(e) => getEmail(e)}
                    placeholder='Email'
                    required></input>
                <input type="password" className='password'
                    onChange={(e) => getPassword(e)}
                    placeholder='Password'
                    required></input>
                <input type="password" className='password'
                    onChange={(e) => getRePassword(e)}
                    placeholder='Re-enter Password'
                    required></input>
                <button type='submit' className='signup-btn'
                    onClick={(e) => Signin(e)}>signup</button>
                <Link className="login-link" to="/login">Login</Link>
            </form>
        </>

    )
}