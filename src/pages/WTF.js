import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './WTF.css'

function WTF() {
    return (
        <>
            <Header />
            <section className='wtf-container'>
                <h2>Why does this exist?</h2>
                <p>Lets WINE was created in celebration of Olivia Lee's 22nd birthday. The idea came about when creator Ashley remembered every time they hung out they could never think of what to do. We would play a lot of trivia games and search buzzfeed for quizzes we could turn into drinking games. As Ashley remembered this never-ending issue in her friendship with Olivia, she also remembered she knows how to make a functional website... duh. So it was born 'Lets WINE'.</p>
                <h2>How does this work?</h2>
                <p>Lets WINE uses <a href='https://opentdb.com/'>www.opentdb.com</a> to pull questions and create unique quizzes each time for the trivia game. If you for some reason want to add your own questions into the mix you can create an account on their website and submit your own questions. Then they will be in the API to be pulled. </p>
                <p>The cocktail generator was added as a second thought one because I(Ashley) was bored and also I thought it would be a fun addition to try a new drink while playing the game. The drinks are all being pulled from <a href="https://www.thecocktaildb.com/">www.thecocktaildb.com/</a>. The word game is all from scratch with words being pulled from a defined list in the code.</p>
                <p> The rest of the games on the website use the <a href="https://docs.truthordarebot.xyz/api-docs">https://docs.truthordarebot.xyz/api-docs</a> to pull the prompts for the games. Once again this is a website you are able to visit and add your own prompts to with the chance of eventually seeing it in the game! </p>
                <section className='wtf'>
                    <Link to='/' className='homebtn'>
                        <button>← Back to Home</button>
                    </Link>
                </section>
            </section>
        </>
    )
}

export default WTF;