import React from 'react';
import theraphy from '../../assets/therapy.jpg';
import './Card.css';
const Card = () => {
    return (
        <>
            <div className="container">
                <h1 className="text-center text-white my-5">
                    Professional Massage Center in Hotel al barsha
                </h1>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="d-flex py-5  cardColor">
                            <div>
                                <img
                                    className="w-75 "
                                    src={theraphy}
                                    alt="theraphy"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-item-center flex-column">
                                <h2 className="text-center">
                                    Aromaterapy Massage
                                </h2>

                                <p className="text-center">
                                    AED 300 <br /> 60 min
                                </p>
                                <a className="btn__primary mb-2">Book Now</a>
                                <a className="btn__secondary">Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex py-5  cardColor">
                            <div>
                                <img
                                    className="w-75 "
                                    src={theraphy}
                                    alt="theraphy"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-item-center flex-column">
                                <h2 className="text-center">
                                    Aromaterapy Massage
                                </h2>

                                <p className="text-center">
                                    AED 300 <br /> 60 min
                                </p>
                                <a className="btn__primary mb-2">Book Now</a>
                                <a className="btn__secondary">Whatsapp</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Row */}
                <div className="row my-5">
                    <div className="col-lg-6">
                        <div className="d-flex py-5  cardColor">
                            <div>
                                <img
                                    className="w-75 "
                                    src={theraphy}
                                    alt="theraphy"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-item-center flex-column">
                                <h2 className="text-center">
                                    Aromaterapy Massage
                                </h2>

                                <p className="text-center">
                                    AED 300 <br /> 60 min
                                </p>
                                <a className="btn__primary mb-2">Book Now</a>
                                <a className="btn__secondary">Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="d-flex py-5  cardColor">
                            <div>
                                <img
                                    className="w-75 "
                                    src={theraphy}
                                    alt="theraphy"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-item-center flex-column">
                                <h2 className="text-center">
                                    Aromaterapy Massage
                                </h2>

                                <p className="text-center">
                                    AED 300 <br /> 60 min
                                </p>
                                <a className="btn__primary mb-2">Book Now</a>
                                <a className="btn__secondary">Whatsapp</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Row */}
                <div className="row my-5">
                    <div className="col-lg-6">
                        <div className="d-flex py-5  cardColor">
                            <div>
                                <img
                                    className="w-75 "
                                    src={theraphy}
                                    alt="theraphy"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-item-center flex-column">
                                <h2 className="text-center">
                                    Aromaterapy Massage
                                </h2>

                                <p className="text-center">
                                    AED 300 <br /> 60 min
                                </p>
                                <a className="btn__primary mb-2">Book Now</a>
                                <a className="btn__secondary">Whatsapp</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="d-flex py-5  cardColor">
                            <div>
                                <img
                                    className="w-75 "
                                    src={theraphy}
                                    alt="theraphy"
                                />
                            </div>
                            <div className="d-flex justify-content-center align-item-center flex-column">
                                <h2 className="text-center">
                                    Aromaterapy Massage
                                </h2>

                                <p className="text-center">
                                    AED 300 <br /> 60 min
                                </p>
                                <a className="btn__primary mb-2">Book Now</a>
                                <a className="btn__secondary">Whatsapp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
