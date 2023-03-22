import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Carousal from './components/Carousal/Carousal';
import Card from './components/Card/Card';

const App = () => {
    return (
        <>
            <Navbar />
            <Carousal />
            <Card />
        </>
    );
};

export default App;
