import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

import './Welcome.css';

function Welcome() {
    return (
        <>
            <Header />
            <section className='welcome-text' data-description="">
                <p>Welcome to GirlsGoWild! An online game platform aimed for the girls who love to drink but cant think of how to get the party started. Each game has its own set of regulations that determine how much you drink. Tried and true you and the girls should be spilling <em>ALLLL</em> the tea after 30 minutes...  </p>
            </section>

            <section className='link-section'>
                <Link to='/truthOrDare' data-description="Classic Truth or Dare with two rating settings; PG13 & R. Sips are determined each turn">
                    <button>Truth or Dare →</button>
                </Link>
                <Link to='/wouldYouRather' data-description="Classic Would You Rather with a mix of mild to R rated prompts. Sips are determined each turn" >
                    <button>Would You Rather →</button>
                </Link>
                <Link to='/neverHaveIEver' data-description="Never Have I Ever... If you have done what the prompt says you must drink the amount shown.">
                    <button>Never Have I Ever →</button>
                </Link>
                <Link to='/whichbtch' data-description="Pick which of your friends best fits the prompt and the winner must drink the amount shown.">
                    <button>Which B*tch →</button>
                </Link>
                <Link to="/spin" data-description="Create your own spin wheel with up to 8 different custom spaces!" >
                    <button>
                        Spinner →</button>
                </Link>
                <Link to="/setup" data-description="Classic trivia game, pick your category and difficulty then start quizzing! Get a question wrong spin the wheel.">
                    <button>
                        Trivia →</button>
                </Link>
                <Link to='/wordGuess' data-description="Our take on wordle, get a clue and try to figure out the secret word. 3 wrong guesses and your spinning the wheel." >
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