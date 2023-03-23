import React from 'react';
import team from '../../assets/team.webp';
const Teams = () => {
    return (
        <div className="container">
            <h1 className="text-center text-white mb-3">Our Team</h1>
            <div className="row ">
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <img className="w-75" src={team} alt="massage" />
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <img className="w-75" src={team} alt="massage" />
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <img className="w-75" src={team} alt="massage" />
                </div>
            </div>
            <div className="row my-5 ">
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <img className="w-75" src={team} alt="massage" />
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <img className="w-75" src={team} alt="massage" />
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <img className="w-75" src={team} alt="massage" />
                </div>
            </div>
        </div>
    );
};

export default Teams;
