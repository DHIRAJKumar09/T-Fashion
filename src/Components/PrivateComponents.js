import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PrivateComponents =()=>{
    const navigate = useNavigate();
    const auth = localStorage.getItem("user");
    return  auth?<Outlet/>:navigate("/");

}
export default PrivateComponents;
