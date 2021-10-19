import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import loginImg from './login-Undraw Img.jpg';
import useFirebase from '../../../Hooks/useFirebase';


const Login = () => {
    const { signInUsingGoogle } = useFirebase;
    return (
        <div className="container mb-5">
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
                    <p className="text-center">----------or---------</p>
                    <button onClick={signInUsingGoogle} className="btn-dark px-3 py-1 border-0 rounded-2 d-flex mx-auto">Google Sign In</button>

                </div>
                <div className="form-right col-md-7 col-12">
                    <img className="img-fluid login-img" src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;