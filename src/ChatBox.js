import { MoreVert } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import Navbar from './Navbar';
import './ChatBox.css'
import SendIcon from '@mui/icons-material/Send';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';

export default function ChatBox() {
    const [user] = useAuthState(auth);
    
    return (
        <div>
            <Navbar islogin={true} />
            <div className="chat__header">
                <Avatar />

                <div className='chat__headerInfo'>
                    <h3>{user.displayName}</h3>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                <p className='chat__message'>
                    <span className='chat__name'>Saif</span>
                    This is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__message chat__reciever'>
                    <span className='chat__name'>Saif</span>
                    This is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__message'>
                    <span className='chat__name'>Saif</span>
                    This is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__message'>
                    <span className='chat__name'>Saif</span>
                    This is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__message chat__reciever'>
                    <span className='chat__name'>Saif</span>
                    This is a messageThis is a messageThis is a messageThis is a messageThis is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>

                <p className='chat__message'>
                    <span className='chat__name'>Saif</span>
                    This is a message
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className='chat__footer'>
                <input 
                    placeholder='Type a message'
                    type="text"
                />
                <button type="submit">
                    Send a message
                </button>
                <SendIcon />
            </div>
        </div>
    )
}
