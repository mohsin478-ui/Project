import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin =() => {
        sessionStorage.setItem("isLogin",true)
        navigate('/dashboard')
    }

    return (
        <div class="login">
            <div id='login'>Login</div>
            <input type='text' placeholder='Enter userName'>
            </input>
            <br></br>
            <input type='password' placeholder='Enter password'>
            </input>
            <br></br>
            <button onClick={()=>{handleLogin()}}>Login</button>
        </div>
    )
}

export default Login