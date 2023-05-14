import React from 'react';
import { Footer, Possibility, Features, Header, WhatGPT3 } from '../../containers';
import { CTA, Brand, Navbar } from '../../components';

import '../../App.css';

const Home = () => {
    return (
        <div>
            <div className="App">
                <div className="gradient__bg">
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Possibility />
                <CTA />
                <Footer />
                </div>
        </div>
    )
}

export default Home