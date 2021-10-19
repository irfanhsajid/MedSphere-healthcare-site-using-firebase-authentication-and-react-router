import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import loginImg from './login-Undraw Img.jpg';

const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center login-form">
                <div className="form-left col-md-5 col-12">
                    <h6 className="text-center fw-bold">Login Here for Dr's Appointment</h6>
                    <form onSubmit="" className="my-2 form-inputField">
                        <input className="border-0" type="email" name="" id="" placeholder="Your email" /> <br />
                        <input className="border-0" type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <input className="login" type="submit" value="Login" />
                    </form>
                    <p>New to MedSphere Website? <Link to="/register">Create Acount</Link></p>
                </div>
                <div className="form-right col-md-7 col-12">
                    <img className="img-fluid login-img" src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;