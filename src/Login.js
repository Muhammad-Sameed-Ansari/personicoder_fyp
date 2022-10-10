import React from 'react'
import Header from './Header';
// import {useNavigate} from 'react-router-dom';

export default function Login() {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    // const navigate = useNavigate();

    const display = () => {

    }
    return (
        <div className="app">
            <Header />
            <div >
                <h2 className='div1'>Welcome to Login </h2>
                <input className='Input' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'></input>
                <input className='Input' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your Password'></input>
                <button onClick={display} className='button' type='button'>Click Me</button>
            </div>
        </div>
  )
}
