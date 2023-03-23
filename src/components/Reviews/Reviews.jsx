import React from 'react';
import './Reviews.css';
const Reviews = () => {
    return (
        <>
            <div className="reviews">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <h1 className="text-center text-white py-5">
                            Customer Reviews
                        </h1>
                        <div className="carousel-item   active">
                            <p className="text-center  text-white fs-4 w-75 m-auto py-4 mb-4">
                                Enhance your luxury massage experience through
                                our lucrative deals and promotions. Reach out to
                                us know what deals we have available and how you
                                can make use of it.
                            </p>
                        </div>
                        <div className="carousel-item  ">
                            <p className="text-center  text-white fs-4 w-75 m-auto py-4 mb-4">
                                Enhance your luxury massage experience through
                                our lucrative deals and promotions. Reach out to
                                us know what deals we have available and how you
                                can make use of it.
                            </p>
                        </div>
                        <div className="carousel-item  ">
                            <p className="text-center  text-white fs-4 w-75 m-auto py-4 mb-4">
                                Enhance your luxury massage experience through
                                our lucrative deals and promotions. Reach out to
                                us know what deals we have available and how you
                                can make use of it.
                            </p>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#282828"
                    fillOpacity="1"
                    d="M0,288L80,288C160,288,320,288,480,250.7C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
            </svg>
        </>
    );
};

export default Reviews;
