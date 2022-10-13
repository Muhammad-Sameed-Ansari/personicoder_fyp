import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Page from './Page';

function App() {
    // const { user } = true;
    return (
        <BrowserRouter>
                {/* <Route path='/' element={user ? (<Page/>) : (<Login/>)} /> */}
            
            
                
                <Routes>
                    <Route exact path="/" element={<Page/>} />
                    <Route exact path="/Login" element={<Login/>} />
                </Routes>
                
        </BrowserRouter>
                  
        
    );
}

export default App;
