import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import WelcomeI from '../images/WelcomeI.png';
import './Welcome.css';

function Welcome() {
    return (
        <>
            <Header />
         
            <section className='link-section'>
                <Link to="/setup">
                    <button>Trivia →</button>
                </Link>
                <Link to='/wordGuess'>
                    <button>Word Guess →</button>
                </Link>
                <Link to='/cocktails'>
                    <button type='button'>I need a Drink</button>
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