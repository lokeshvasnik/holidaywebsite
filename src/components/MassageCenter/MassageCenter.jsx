import React from 'react';

import building from '../../assets/building.webp';
import './MassageCenter.css';
const MassageCenter = () => {
    return (
        <>
            <div className="w-75 container">
                <h1 className="text-center text-white">
                    About Our Massage Center
                </h1>
                <p className="text-center details text-white ">
                    At , we are pleased to introduce ourselves as the main
                    location for an extravagance spa and back rub in Bur Dubai.
                    Stowed away at the core of Holiday ascot hotel bur Dubai, we
                    have made a world in which each second is dedicated to
                    serenity. Browse our elite choice of extravagance rub
                    medicines and spa bundles to loosen up from your regular
                    problems. Every one of our back rub treatments, whether it
                    be the colourful hot stone back rub or the conventional
                    Swedish back rub, are accessible at exceptionally cutthroat
                    costs without settling on the quality. Our cutting edge
                    treatment place is outfitted with various offices, including
                    VIP treatment rooms, steam rooms, and couple's treatment
                    rooms.
                </p>
                <p className="text-center details text-white">
                    Furthermore, each of the products that we use, whether it be
                    the oil, or a moisturizer are tested to assure its quality.
                    Our team of therapists is wholly comprised of Thai
                    professionals who are certified and have numerous years of
                    experience. Not only can we provide you with an experience
                    like no other, but we are also happy to customize treatments
                    to suit your specific needs. We are conveniently located at
                    the Holiday Ascot Hotel Inside (R) Floor in Bur Dubai, so
                    customers can either choose to walk-in or place a prior
                    booking through our online provision. For information about
                    our services, call us on +971-52-399-3451. us on
                    +971-52-399-3451.
                </p>
            </div>
            <div className="container py-5">
                <img className="w-100" src={building} alt="building" />
            </div>
            <div className="text-center py-5">
                <h1 className="text-white my-5">
                    Our Massage Center & SPA Offers
                </h1>
                <p className="text-white">
                    Enhance your luxury massage experience through our lucrative
                    deals and promotions. Reach out to us know what deals we
                    have available and how you can make use of it.
                </p>
            </div>
        </>
    );
};

export default MassageCenter;
