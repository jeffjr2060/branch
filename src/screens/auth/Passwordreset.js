import React, { useState } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Passwordreset() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState();
    const navigate = useNavigate();

    const resetPassword = (e) => {
        e.preventDefault();
        const token = searchParams.get("token");
        axios.post("/passwordreset", {
            password: password
        }, {
            params: {
                token: token
            }
        }).then((response) => {
            setResponse("Successfully changed password. Please log in.");
            console.log(response.data);
            navigate("/login");
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div>
            <h1>Enter your new password</h1>
            {
                response &&
                <div>
                    <h2>{response}</h2>
                </div>
            }
            <form className='form' onSubmit={resetPassword} >
                <input type="text" placeholder='New password' value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                <button type="submit" className='btn' >Reset Password</button>
            </form>
        </div>
    )
}