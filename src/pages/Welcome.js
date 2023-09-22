import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import WelcomeI from '../images/WelcomeI.png';
import './Welcome.css';

function Welcome() {
    return (
        <>
            <Header />
            <section className='welcome-text'>
                <p>Welcome to Drink Bitch! An online game platform aimed for the girls who love to drink. </p>
            </section>

            <section className='link-section'>
                <Link to="/setup">
                    <button>Trivia →</button>
                </Link>
                <Link to='/wordGuess'>
                    <button>Word Guess →</button>
                </Link>
                <Link to='/truthOrDare'>
                    <button>Truth or Dare →</button>
                </Link>
                <Link to='/wouldYouRather'>
                    <button>Would You Rather →</button>
                </Link>
                <Link to='/neverHaveIEver'>
                    <button>Never Have I Ever →</button>
                </Link>
            </section>
            <section className='wtf'>
                <Link to='/cocktails'>
                    <button type='button'>I need a Drink</button>
                </Link>
                <Link to="/WTF">
                    <button >WTF is This?</button>
                </Link>
            </section>
            <Footer className='footer' />

        </>
    );
}
export default Welcome;