import React from 'react';
import Location from '../components/Location/Location';
import Footer from '../components/Footer/Footer';
const Contact = () => {
    return (
        <div className="text-white">
            {/* <h1>Contact Us</h1> */}
            <div className="container">
                <h1 className="py-3">Contact Us</h1>
                <p>
                    <a href="tel:971555883456" className="text-white">
                        <i class="fa-solid fa-phone mx-3"></i>971 55 588 3456
                    </a>
                </p>
                <p>
                    <a href="tel:971555883456" className="text-white">
                        <i class="fa-solid fa-phone mx-3"></i> 971 55 588 3456
                    </a>
                </p>
                <p>
                    <a
                        href="mailto:info@Holidayinspa.com"
                        className="text-white"
                    >
                        <i class="fa-solid fa-envelope mx-3"></i>
                        info@Holidayinspa.com
                    </a>
                </p>
                <p>
                    <a href="/" className="text-white">
                        <i class="fa-solid fa-location-dot mx-3"></i>
                        inside Holiday inn hotel gym floor Sheikh Zayed Rd - Al
                        Barsha - Dubai
                    </a>
                </p>
            </div>
            <dir>
                <Location />
                <Footer />
            </dir>
        </div>
    );
};

export default Contact;
