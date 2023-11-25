import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login =()=>{
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
  

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate("/");
        }
    },[]);

    const handlelogin =async()=>{
        let result = await fetch("http://localhost:5000/login",{
            method : "post",
            body: JSON.stringify({email , password}),
            headers : {
                "Content-Type":"application/json"
            },
        });
        result = await result.json();
        console.warn(result);

    }

    return (
        <div className='signup'>
        <h1>Welcome Again !</h1>
        <h3>Login Here</h3>
           
            <input className='inputbox'  value={email}  onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='enter your email'/>
            <input className='inputbox'  value={password}  onChange={(e)=>setPassword(e.target.value)}  type='password' placeholder='enter your password'/>
            <button className='button' onClick={handlelogin} type='submit'> Signup </button>
          
        </div>
    )
}
export default Login