import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Terms, Privacy } from "../pages";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/terms" element={<Terms />}/>
                <Route path="/privacy" element={<Privacy />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;