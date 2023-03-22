import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import theraphy from '../../assets/therapy.jpg';

import './Slider.css';
const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    return (
        <Carousel className="carousal" responsive={responsive}>
            <div className="carousal__card">
                <div className="carousal__header">
                    <img src={theraphy} className="profile" alt="" />
                </div>
            </div>
            <div className="carousal__card">
                <div className="carousal__header">
                    <img src={theraphy} className="profile" alt="" />
                </div>
            </div>
            <div className="carousal__card">
                <div className="carousal__header">
                    <img src={theraphy} className="profile" alt="" />
                </div>
            </div>
            <div className="carousal__card">
                <div className="carousal__header">
                    <img src={theraphy} className="profile" alt="" />
                </div>
            </div>
        </Carousel>
    );
};

export default Slider;
