import React from 'react';
import contactImg from './banner-5.png';
import './contact.css';
const Contact = () => {
    return (
        <div id="contact" className="contact my-5">
            <div className="container contact-container p-4 d-flex align-items-center justify-content-between">
                <div className="contact-left">
                    <h1 className="banner-text">Contact Us</h1>
                    <b className="text-secondary">Home / Contact</b>
                    <p> +99012789 <br />
                        <small>medsphere@hotline.io</small></p>
                </div>
                <div className="contact-right">
                    <img className="img-fluid" src={contactImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;