import React, { useState } from "react";
import "./Login.css";
const Login = () =>{
    const [popupStyle , showPopup]=useState("hide")
    const popup=()=>{
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide") , 3000)
    }
    return(
        <div className="cover">
            <h1>
                Login
            </h1>
            <input type="text" placeholder="username" />
<input type="password" placeholder="password"/>
<div className="login-btn" onClick={popup}>
Login
</div>
<p className="text">
Or Login using
</p>
<div className="alt-login">
    <div className="facebook"></div>
<div className="google"></div>
<div className="insta"></div>
</div>
        </div>
    )
}
export default Login