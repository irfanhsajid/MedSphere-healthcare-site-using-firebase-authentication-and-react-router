import React from 'react';
import { Link } from 'react-router-dom';
import './GetService.css';
const GetService = () => {
    return (
        <div className="getService-container">
            <div className="text-center getService-text bg-dark py-5 text">
                <h1>Thanks for Coming!</h1>
                <h3 className="text-light">Go to the payment section and take your serial.</h3>
                <h5>Have patience!</h5>
                <strong>❤</strong> <br />
                <Link to="/payment"> <button className="btn-outline-light text-dark rounded-3 px-3 py-1 border-0">Payment</button></Link>
            </div>

        </div>


    );
};

export default GetService;