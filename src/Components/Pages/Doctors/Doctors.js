import React, { useEffect, useState } from 'react';
import './Doctors.css';
const Doctors = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container mb-5">
            <div className="text-center my-4">
                <h1 className="abt-title">Well qualified Doctors Here</h1>
                <p>All the doctors are well qualified and specialist in the field. Lorem ipsum dolor sit amet. Feel Free to visit here and apointment Here<br />
                    <strong>Happy Online Education</strong>
                </p>
                <p className="border-bottom  border-2 w-50 d-flex mx-auto"></p>
            </div>
            <div className="row">
                {
                    services.map(service =>


                        <div className="col-12 col-md-4 g-4">
                            <div className="card h-100 card-container">
                                <img src={service.img} alt="services img" className="card-img" />
                                <div className="card-body">
                                    <h2 className="card-title">{service.name}</h2>
                                    <span className="card-text">
                                        <strong>Specialist in : {service.specialist}</strong>
                                        <p>From : {service.education}</p>
                                    </span>
                                    <button className="border-0 rounded-2 px-3 py-1 enroll-btn">Appoint Him</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Doctors;