import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import { Route } from 'react-router-dom'
import SignUp from "../Auth/Signup";
import Authication from "../Pages/AuthPage";
import HomePage from "../Pages/HomePage";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={
                        true === false ? <HomePage /> : <Navigate to='/login' replace />
                    } />
                <Route path="/login" element={<Authication />}/>
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}
