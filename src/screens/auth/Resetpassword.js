import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Resetpassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const resetPasswordEmail = (e) => {
        e.preventDefault();
        axios.post('/resetpassword', {
            email: email
        }).then((response) => {
            console.log(response.data);
            setMessage("Email sent");
            navigate('/passwordreset');
        }).catch(err => console.error(err))
    }

    return (
        <>
            <div>
                <h1>Reset password</h1>
                {
                    message &&
                    <div>
                        <h2>{message}</h2>
                    </div>
                }
                <form className='form' onSubmit={resetPasswordEmail} >
                    <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                    <button type="submit" className='btn' >Reset Password</button>
                </form>
            </div>
        </>
    )
}

