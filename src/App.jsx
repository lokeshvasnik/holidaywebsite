import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import About from './pages/About';
import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
