import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password).then(console.log("Login Success"));
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    }

    return (
        <form>
        <h3>Sign In</h3>

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
          <button className="btn btn-primary" onClick={handleLogIn}>
            Submit
          </button>
        </div>
      </form>
    )
}
