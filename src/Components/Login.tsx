import React from 'react'
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const login = () =>{
        if (true) {
            
            navigate('/');
        }
    }
  return (
    <div>
        <button
        onClick={()=> login()}
        >Logear</button>
    </div>
  )
}
