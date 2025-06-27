import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import { Route } from 'react-router-dom'
import SignUp from "../components/auth/Signup"
import Authication from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import { useContext } from "react";
import { loginContext } from "../Context/LoginContext";



export default function AppRouter() {
    const [login] = useContext(loginContext);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={
                        login === true ? <Navigate to='/home' replace /> : <Navigate to='/login' replace />
                    } />
                <Route path="/login"
                    element={
                        login === true ? <Navigate to='/home' replace /> : <Authication />
                    } />

                <Route path="/home"
                    element={
                        login === true ? <HomePage />:  <Authication />
                    } />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}
