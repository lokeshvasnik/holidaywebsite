import React from 'react';

const Location = () => {
    return (
        <>
            <div className="container-fluid ">
                <h1 className="text-center text-white py-5">
                    Our Massage Spa Location
                </h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14450.279876120212!2d55.1937167!3d25.1164143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf71954a597f8f5ea!2sHoliday%20spa!5e0!3m2!1sen!2sae!4v1673540396991!5m2!1sen!2sae"
                    className="w-100 map"
                    en=""
                ></iframe>
            </div>
        </>
    );
};

export default Location;
