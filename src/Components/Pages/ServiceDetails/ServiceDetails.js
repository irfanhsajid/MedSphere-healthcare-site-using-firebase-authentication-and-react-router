import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './serviceDetails.css';
const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    const detailsInfo = data.filter(info => info.id === serviceId);
    return (

        <div className=" container details-container d-flex flex-column align-items-center text-center my-5">
            <div className="w-75">
                <img className="img-fluid details-img rounded-3 shadow-lg " src={detailsInfo[0]?.bannerImg} alt="" />
            </div>
            <div className="details-text p-4">
                <h1 className="title">{detailsInfo[0]?.name}</h1>
                <p>{detailsInfo[0]?.details}</p>
                <strong>Cost : {detailsInfo[0]?.cost}</strong>
                <h3 className="doctors-name">Specialist Doctors: {detailsInfo[0]?.doctors} </h3>
                <Link style={{ textDecoration: 'none' }} to="/none"> <button className="btn-outline-primary px-3 py-1 dr-btn rounded-2">More Details</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;