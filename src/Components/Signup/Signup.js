import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';
import { FaSquareFacebook } from "react-icons/fa6";
const Signup = () =>{
  
   const [name , setName] = useState("");
   const [email,setEmail]= useState("");
   const [password , setPassword] = useState("");
   const navigate = useNavigate();

   useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
        navigate("/");
    }
   })



   const handlesignup=async()=>{
    console.warn(name,email,password);
    let result  = await fetch("http://localhost:5000/signup",{
        method : "POST",
        body: JSON.stringify({name,email,password}),
        headers : {
            'Content-Type' : 'application/json'
        },
    });
    result = await result.json();
    localStorage.setItem("user",JSON.stringify(result));
    navigate("/");
    console.warn(result);
   }
    
    return(
        <div className='signup'>
        <h1>Register Here</h1>
            <input className='inputbox'  value={name}  onChange={(e)=>setName(e.target.value)}  type='text' placeholder='enter your name'/>
            <input className='inputbox'  value={email}  onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='enter your email'/>
            <input className='inputbox'  value={password}  onChange={(e)=>setPassword(e.target.value)}  type='password' placeholder='enter your password'/>
            <button className='button' onClick={handlesignup} type='submit'> Signup </button>

          
        </div>
    )
}
export default Signup;