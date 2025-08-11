import React from "react";
import Modal from "../Modal/modal";
// import Modal from "../Modal/modal";

const Register = () => {
    return (
        <div class="register">
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
            <button>Forgot password</button>

        </div>

    )
}

export default Register