import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';
const Register = () => {
    return (
        <div className="container my-5 ">
            <div className="register-form mx-auto w-75">
                <h3 className="fw-bold text-center my-3">Register : Create Acount</h3>
                <form onSubmit="" className="form-inputField mb-3">
                    <input className="border-0" type="email" name="" id=" " placeholder="First Name" />
                    <br />
                    <input className="border-0" type="email" name="" id=" " placeholder="Last Name" />
                    <br />
                    <input className="border-0" type="email" name="" id=" " placeholder="Your Email" />
                    <br />
                    <input className="border-0" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="border-0" type="password" name="" id="" placeholder="Re-Enter Password" />
                    <br />
                    <input className="submit" type="submit" value="Submit" />
                </form>
                <p>Already Have an acount? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;