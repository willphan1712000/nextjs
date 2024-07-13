'use client'
import { log } from 'console'
import React, { useState } from 'react'

type User = {
    email: string,
    password: string
}

const RegisterBlock = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleClick(e: any) : void {
        e.preventDefault();
        const user: User = {
            email: email,
            password: password
        }
        sendUser(user);
    }
    
    async function sendUser(user: User) {
        try {
            const res = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if(res.ok) {
                alert("success")
            } else {
                const jsonRes = await res.json();
                console.log(jsonRes.error);
                
                let result : string = "";
                jsonRes.forEach(function(e: any) {
                    result += e.message + "\n";
                })
                alert(result);
            }
        } catch(error) {
            console.log('Error: ' + error);
        }
    }

    function handleChangeEmail(e: any) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e: any) {
        setPassword(e.target.value);
    }

    return (
        <div id="register" className="bg-white w-96 h-90vh p-10 absolute top-0 right-0 flex flex-col justify-center items-center shadow-2xl">
            <h1>Register</h1>
            <form action="" className='flex flex-col justify-center items-center'>
                <label htmlFor="email">
                    <p>Email</p>
                    <input onChange={handleChangeEmail} id="email" className='p-2 m-5 border-black border rounded-2xl' type="email" value={email}/>
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <input onChange={handleChangePassword} id="password" className='p-2 m-5 border-black border rounded-2xl' type="password" value={password}/>
                </label>
                <input onClick={handleClick} type="submit" className='btn btn-primary'/>
            </form>
        </div>
    )
}

export default RegisterBlock
