import React from "react";
import './modalForget.css';


const ModalForget = ({handleClose}) => {
    return(
        <div class="Modal">
            <div class="M1">
                <div class="h1">Forgot password</div>
                <div class="content">
                    Enter your Email Address
                    <br></br>
                    <input type="text" placeholder="Enter Email">
                    </input>
                    <br></br>
                    <button>Send OTP</button>
                    <button onClick={()=> handleClose()}>Back</button>
                </div>
            </div>
        </div>
    )
}


export default ModalForget