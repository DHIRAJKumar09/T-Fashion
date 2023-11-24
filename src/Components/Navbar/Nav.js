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
    <nav class="navbar">
  <div class="navbar-toggle" onClick={toggleMenu}>
    <FaBars/>
  </div>
  <ul class="nav-ul">
    <li><a href="/">Products</a></li>
    <li><a href="/add">Add Products</a></li>
    <li><a href="/update">Update Products</a></li>
    <li><a href="/profile">Profile</a></li>

   <li>{ auth ? <Link onClick={logout} to="/signup" >Logout</Link> : 
   
   <Link to="/signup">Signup</Link>}
   </li>

  </ul>
</nav>

  )
}
