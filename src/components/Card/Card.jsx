import React from 'react';
import theraphy from '../../assets/therapy.webp';
import './Card.css';
const Card = () => {
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center text-white my-5">
                    Professional Massage Center in Hotel al barsha
                </h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex py-5  cardColor">
                            <div className="imageRelative">
                                <img
                                    className="w-50"
                                    src={theraphy}
                                    alt="theraphy"
                                />
                            </div>
                            <div className=" cardHeading d-flex justify-content-center align-item-center flex-column">
                                <h2 className="text-center mb-4">
                                    Aromaterapy Massage
                                </h2>

                                <div className="d-flex justify-content-between border-top py-2">
                                    <i class="fa-solid fa-clock fs-2 mx-3 my-2"></i>
                                    <p>
                                        AED 300 <br /> 60 min
                                    </p>
                                </div>
                                <a className="btn__primary mb-2">
                                    <i class="fa-solid fa-phone mx-3" />
                                    Book Now
                                </a>
                                <a className="btn__secondary">
                                    <i class="fa-brands fa-whatsapp mx-3"></i>
                                    Whatsapp
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex py-5  cardColor">
                            <div className="imageRelative">
                                <img
                                    className="w-50"
                                    src={theraphy}
                                    alt="theraphy"
                                />
                            </div>
                            <div className=" cardHeading d-flex justify-content-center align-item-center flex-column">
                                <h2 className="text-center mb-4">
                                    Aromaterapy Massage
                                </h2>

                                <div className="d-flex justify-content-between border-top py-2">
                                    <i class="fa-solid fa-clock fs-2 mx-3 my-2"></i>
                                    <p>
                                        AED 300 <br /> 60 min
                                    </p>
                                </div>
                                <a className="btn__primary mb-2">
                                    <i class="fa-solid fa-phone mx-3" />
                                    Book Now
                                </a>
                                <a className="btn__secondary">
                                    <i class="fa-brands fa-whatsapp mx-3"></i>
                                    Whatsapp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
