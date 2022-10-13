import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase';
import Header from './Header'
import './Login.css'

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () =>  {
        try {
            await createUserWithEmailAndPassword(auth, email, password).then(console.log("Register Success"));
            
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    const handleLogIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password).then(console.log("Login Success"));
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    const goToSignUp = () => {
        setIsLogin(false);
        setUsername("");
        setEmail("");
        setPassword("");
    }

    const goToLogin = () => {
        setIsLogin(true);
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="app">
            <Header />
            <div className="conatiner">
            <h2 className='div1'>Welcome to {isLogin ? "Login" : "Register"} </h2>
                {!isLogin ? <input className='Input' type="text" value={username} onInput={e => setUsername(e.target.value)} placeholder='Enter Your Name'></input> : <></>}
                <input className='Input' type="text" value={email} onInput={e => setEmail(e.target.value)} placeholder='Enter Your Email'></input>
                <input className='Input' type="password" value={password} onInput={e => setPassword(e.target.value)} placeholder='Enter Your Password'></input>
                {isLogin ? <button className='button' type='button' onClick={handleLogIn}>Login</button> : <button className='button' type='button' onClick={handleSignUp}>Register</button>}
                {isLogin ? <h4>Do not have an account yet? <p onClick={goToSignUp}>Register</p></h4> : <h4>Already have an account? <p onClick={goToLogin}>Login</p></h4>}
            </div>
        </div>
    )
}
