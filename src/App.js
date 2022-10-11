import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './Login';
import Page from './Page';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
