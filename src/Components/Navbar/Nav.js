import React from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import { FaBars  } from "react-icons/fa";
import './nav.css';
export const Nav = () => {
  const navigate = useNavigate();
  const auth  = localStorage.getItem("user");
  const logout =()=>{
    localStorage.clear();
    navigate("/signup");
  }



  const toggleMenu = () =>{
    const navU1 = document.querySelector('.nav-ul');
    navU1.classList.toggle('show');
  };
  return (
    <div class="navbar">
   
        <div class="navbar-toggle" onClick={toggleMenu}>
           <FaBars/>

         </div>
         <img alt='logo' 
          className='logo'
           src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO5sckwoTmUhhIH4x40ZJS3UaUyf0Ij2p7YjautFlV&s'
           ></img>
      
        

  { auth ?
    <ul class="nav-ul">
    
 

         <li><a href="/">Products</a></li>
         <li><a href="/add">Add Products</a></li>
         <li><a href="/update">Update Products</a></li>
         <li><a href="/profile">Profile</a></li>
         <li><Link onClick={logout} to="/signup" >Logout : {JSON.parse(auth).name}</Link></li> 
    </ul>
    :
   <ul className='nav-ul'>
      <li> <Link to="/signup">Signup</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
   } 
</div>

  )
}
