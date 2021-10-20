import React from 'react';
import bannerImg from '../../../../images/Banner/banner.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className="container-fluid px-4 banner my-4">
            <div className="banner-container py-3 px-2 row align-items-center justify-content-center g-2">
                <div className="banner-left col-md-5 col-12">
                    <p ><b className="text-info">10+ Years Experience</b></p>
                    <h1 className="banner-text">We Are Always <br />
                        Ready To Help <br /> You & Your <br /> Family <strong>❤</strong> </h1>
                    <button className="btn-info mt-4 px-lg-3 py-lg-2  fw-bold border-0 rounded-3 btn-main">Book Apointment</button>
                </div>
                <div className="banner-right  col-md-7 col-12">
                    <img className="img-fluid banner-img" src={bannerImg} alt="404 not found" />
                </div>
            </div>
        </div>
    );
};

export default Banner;