import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import './Welcome.css';

function Welcome() {
    return (
        <>
            <Header />
            <section className='welcome-text'>
                <p>Welcome to GirlsGetGone! An online game platform aimed for the girls who love to drink. Each game has its own set of regulations that determine how much you drink. Tried and true you and the girls should be spilling <em>ALLLL</em> the tea after 30 minutes...  </p>
            </section>

            <section className='link-section'>
                <Link to='/truthOrDare'>
                    <button>Truth or Dare →</button>
                </Link>
                <Link to='/wouldYouRather'>
                    <button>Would You Rather →</button>
                </Link>
                <Link to='/neverHaveIEver'>
                    <button>Never Have I Ever →</button>
                </Link>
                <Link to='/whichbtch'>
                    <button>Which B*tch →</button>
                </Link>
                <Link to="/setup">
                    <button>
                        Trivia →</button>
                </Link>
                <Link to='/wordGuess'>
                    <button> Word Guess →</button>
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