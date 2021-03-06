import React from 'react';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Services from '../services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">

            <Banner></Banner>
            <Services></Services>

            <Doctors></Doctors>
            <Contact></Contact>
        </div>
    );
};

export default Home;