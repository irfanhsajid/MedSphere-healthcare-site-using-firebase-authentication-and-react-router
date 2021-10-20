import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div id="services" className="my-5 container-fluid">
            <div className="text-center mb-5">
                <p><b className="text-info">Our Services</b></p>
                <h1 className="services-title">We Offer Different Services <br /> To Improve Your Health</h1>
            </div>
            <p className="border-bottom  border-2 w-25 d-flex mx-auto"></p>
            <div className="services-container px-2">
                <div className="row justify-content-center">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service.id}
                        ></Service>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Services;