import React from 'react';

import Carousal from '../components/Carousal/Carousal';
import Card from '../components/Card/Card';
import Slider from '../components/Slider/Slider';
import MassageCenter from '../components/MassageCenter/MassageCenter';
import Location from '../components/Location/Location';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Carousal />
            <Card />
            <Slider />
            <MassageCenter />
            <Location />
            <Reviews />
            <Footer />
        </>
    );
};

export default Home;
