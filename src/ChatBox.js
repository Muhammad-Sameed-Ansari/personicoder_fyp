import { MicOutlined, MoreVert } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import './ChatBox.css'
// import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from './firebase';
import { collection, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import axios from 'axios';

export default function ChatBox() {
    const [username, setUsername] = useState("");
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([]);
    const [botMessage, setBotMessage] = useState("");

    useEffect(() => {
        fetchUserName();
        fetchMessages();
    }, [username])

    useEffect(() => {
        const userRef = collection(db, 'users', auth.currentUser.uid, "messages");

        setDoc(doc(userRef), {
            message: botMessage,
            name: 'bot',
            timestamp: serverTimestamp()
        });
        setBotMessage("");
    }, [botMessage]);

    const fetchUserName = async ()  => {
        const docRef = doc(db, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setUsername(docSnap.data().name);
        } else {
            console.log("No document found");
        }
    }

    const fetchMessages = async () => {
        const q = query(collection(db, 'users', auth.currentUser.uid, "messages"), orderBy("timestamp", "asc"));
        onSnapshot(q, (snapshot) => {
            
            setMessages(snapshot.docs.map((doc) => doc.data(), doc.id))
        })
        
    }
    
    const sendMessage = async (e) => {
        e.preventDefault();
        console.log(input)
        console.log(auth.currentUser.uid);

        const userRef = collection(db, 'users', auth.currentUser.uid, "messages");

        await setDoc(doc(userRef), {
            message: input,
            name: username,
            timestamp: serverTimestamp()
        });
        setInput("");

        await axios({
            method: "POST",
            url:`/getData?name=${input}`,
        })
        .then((response) => {
            const res = response.data
            console.log(res.message);
            setBotMessage(res.message);
        })

        // await setDoc(doc(userRef), {
        //     message: botMessage,
        //     name: 'bot',
        //     timestamp: serverTimestamp()
        // });
        // setBotMessage("");


        // axios.post('http://localhost:5000/getData', {
        //     'name': 'hello1'
        // }).then(response => console.log(response)).catch(err => {
        //     console.error(err.toJSON());
        //   });
    }

    return (
        <div>
            <Navbar islogin={true} />
            <div className="chat__header">
                <Avatar />

                <div className='chat__headerInfo'>
                    <h3>{username}</h3>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === username && "chat__reciever"}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                    </p>
                ))}
                {/* <p className='chat__message'>
                    <span className='chat__name'>Saif</span>
                    {profileData && <span>{profileData.profile_name} {profileData.about_me}</span>}
                    <span className='chat__timestamp'>{new Date().toUTCString()}</span>
                </p> */}
            </div>

            <div className='chat__footer'>
                <form>
                <input 
                    placeholder='Type a message'
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" onClick={sendMessage}>
                    Send a message
                </button>
                </form>
                <MicOutlined />
            </div>


        </div>
    )
}
