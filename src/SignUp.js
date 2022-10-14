import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase';
import Navbar from './Navbar';

export default function SignUp() {
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
    return (
    <div>
        <Navbar islogin={false} />
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>User name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            value={username}
            onInput={e => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onInput={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onInput={e => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </div>
  )
}
