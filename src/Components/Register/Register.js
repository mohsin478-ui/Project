import React, { useState } from "react";
import ModalForget from "../Modal/modalForget";



const Register = () => {

    const [forgotPassword,setPassword] = useState(false);

    const handleClose = () => {
       setPassword(prev=>!prev);
    }

    return (
        <div class="register">

            {forgotPassword && <ModalForget handleClose={handleClose} />}

            <div id='register'>Register Your GYM</div>
            <input type='email' placeholder='Enter Email'>
            </input>
            <br></br>
            <input type='text' placeholder='Enter GYM Name'>
            </input>
            <br></br>
            <input type='text' placeholder='Enter UserName'>
            </input>
            <br></br>
            <input type='password' placeholder='Enter pasword'>
            </input>
            <br></br>
            <input type='file'></input>
            <br></br>
            <button>Register</button>
            <br></br>
            <button onClick={()=>handleClose()}>Forgot password</button>

            

            

        </div>

    )
}

export default Register