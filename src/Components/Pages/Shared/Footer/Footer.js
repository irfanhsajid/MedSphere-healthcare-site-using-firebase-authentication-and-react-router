import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='section p-3'>
            <div className="container footer-container">
                <div className="footer-left-info">
                    <h1 className="section-title">MedSphere Healthcare</h1>
                    <p>We provide the <b>best quality</b> of medicare with <b>best doctors</b>. So, You are Welcome with your family anytime.</p>
                    <address>
                        <h5>Main Clinic: </h5>
                        <p>
                            221 jockey hollow, Suite 600 <br />
                            shibpur,Dhaka 1100
                        </p>
                    </address>
                    <p>
                        <b>Phone: </b> (10)+990123323 <br />
                        <b>Fax: </b> 01888344443 <br />
                        <b>Email: </b>medSphere@hotmail.com <br />
                    </p>
                    <ul className="social-icon">
                        <li><a href="none"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="none"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="none"><i className="fab fa-youtube"></i></a></li>
                        <li><a href="none"><i className="fab fa-google-plus-g"></i></a></li>

                    </ul>
                </div>
                <div className="footer-right-form">
                    <h1 className="section-title">Contact Us</h1>
                    <form action="#">
                        <input type="text" name="full-name" id="" placeholder="Full Name" className=" footer-form form-control" />
                        <input type="email" name="email" id="" placeholder="Email Address" className=" footer-form form-control" />
                        <textarea rows="5" name="message" id="textarea" placeholder="Share Opinion..." className="footer-form form-control"  > </textarea>
                        <button className="send-btn ">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;