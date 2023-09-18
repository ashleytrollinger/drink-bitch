import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import WelcomeI from '../images/WelcomeI.png';
import './Welcome.css';

function Welcome() {
    return (
        <>
            <Header />
            <section className='image-container'>
                <img src={WelcomeI} alt="Hand holding a glass of wine with a best friends bracelet." />
            </section>
            <section className='link-section'>
            <Link to="/setup">
                <button>Get Started →</button>
            </Link>
            </section>
            <section className='wtf'>
            <Link to="/WTF">
                <button >WTF is This?</button>
            </Link>
            </section>
  

        </>
    );
}
export default Welcome;