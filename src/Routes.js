import { Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';

export const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <Home/> } />
                <Route path="contacts" element={ <Contacts/> } />
                <Route path="about" element={ <About/> } />
            </Routes>
        </BrowserRouter>
    );
}