import React from 'react';
import contactImg from './banner-5.png';
import './contact.css';
const Contact = () => {
    return (
        <div id="contact" className="contact my-5">
            <div className="container contact-container p-4 d-flex align-items-center justify-content-between">
                <div className="contact-left">
                    <h1 className="banner-text">Contact Us</h1>
                    <p className="text-muted"><i class="fas fa-phone-volume"></i> +99012789 <br />
                        <small><i class="fas fa-envelope me-2">
                        </i>medsphere@hotline.io</small></p>
                </div>
                <div className="contact-right">
                    <img className="img-fluid" src={contactImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;