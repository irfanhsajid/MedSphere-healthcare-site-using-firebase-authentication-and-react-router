import React from 'react';
import Services from '../services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">

            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;