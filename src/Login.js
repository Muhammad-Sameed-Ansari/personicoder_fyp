import React, { useState } from 'react'
import Header from './Header'
import './Login.css'
//import Header from './Header';
// import {useNavigate} from 'react-router-dom';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    const register = () => {
        setIsLogin(false);
    }

    const login = () => {
        setIsLogin(true);
    }

    return (
        <div className="app">
            <Header />
            <div className="conatiner">
            <h2 className='div1'>Welcome to {isLogin ? "Login" : "Register"} </h2>
                {!isLogin ? <input className='Input' type="text"  placeholder='Enter Your Name'></input> : <></>}
                <input className='Input' type="text"  placeholder='Enter Your Email'></input>
                <input className='Input' type="password" placeholder='Enter Your Password'></input>
                <button className='button' type='button' onClick={login}>Login</button>
                <button className='button' type='button' onClick={register}>Register</button>
            </div>
        </div>
  )
}
