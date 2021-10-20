import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, image, doctors, cost, id } = service;
    return (

        <div className="col-12 col-md-4 m-3 shadow-lg rounded-3 px-4 py-3 services-card">
            <img className="img-fluid" src={image} alt="" />
            <h1 className="name">{name}</h1>
            <p>Doctors : {doctors}</p>
            <strong>Cost : {cost}</strong> <br />
            <Link to='/getservice'> <button className="btn-danger rounded-2 px-2  border-0 me-2">Get Service</button></Link>
            <Link to={`/serviceDetails/${id}`}>
                <button className="btn-info border-0 px-2 rounded-2">Details</button>
            </Link>
        </div>

    );
};

export default Service;