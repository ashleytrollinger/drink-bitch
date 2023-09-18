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
                <p>Drink bitch was created in celebration of Olivia Lee's 22nd birthday. The idea came about when creator Ashley remembered every time they hung out they could never think of what to do. We would play a lot of trivia games and search buzzfeed for quizzes we could turn into drinking games.</p>
                <p>As Ashley remembered this never-ending issue in her friendship with Olivia, she also remembered she knows how to make a functional website... duh. So it was born 'Drink Bitch' the name coming from what we would tell eachother when one of us would answer wrong.</p>
                <h2>How does this work?</h2>
                <p>Drink bitch uses <a href='https://opentdb.com/'>https://opentdb.com/</a> to pull questions and create unique quizzes each time. If you for some reason want to add your own questions into the mix you can create an account on their website and submit your own questions. Then they will be in the API to be pulled. </p>
                <section className='wtf'>
                    <Link to="/">

                        <button>Go Back</button>
                    </Link>
                </section>
            </section>
        </>
    )
}

export default WTF;