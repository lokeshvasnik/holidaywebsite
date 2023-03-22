import React from 'react';
import './Reviews.css';
const Reviews = () => {
    return (
        <div className="reviews">
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
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
                <div class="carousel-inner">
                    <h1 className="text-center text-white py-5">
                        Customer Reviews
                    </h1>
                    <div class="carousel-item   active">
                        <p className="text-center  text-white fs-4 w-75 m-auto py-4 mb-4">
                            Enhance your luxury massage experience through our
                            lucrative deals and promotions. Reach out to us know
                            what deals we have available and how you can make
                            use of it.
                        </p>
                    </div>
                    <div class="carousel-item  ">
                        <p className="text-center  text-white fs-4 w-75 m-auto py-4 mb-4">
                            Enhance your luxury massage experience through our
                            lucrative deals and promotions. Reach out to us know
                            what deals we have available and how you can make
                            use of it.
                        </p>
                    </div>
                    <div class="carousel-item  ">
                        <p className="text-center  text-white fs-4 w-75 m-auto py-4 mb-4">
                            Enhance your luxury massage experience through our
                            lucrative deals and promotions. Reach out to us know
                            what deals we have available and how you can make
                            use of it.
                        </p>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Reviews;
