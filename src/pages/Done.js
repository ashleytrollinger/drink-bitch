import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Spill from '../images/Spill.png';
import './Done.css'

function Done() {
    // Function to generate an array of choices from 1 to 10
    const choices = Array.from({ length: 10 }, (_, index) => index + 1);

    return (
        <>
            <Header />
            <section className='done-screen'>
                <section className='thanks'>
                    <h3>Thank you for playing!</h3>
                </section>
                <section className='spill'>
                    <img src={Spill} alt="spilled glass of wine"></img>
                </section>

                <section className='drunk-list'>
                    <h3>How drunk are you?</h3>
                    <ul className="choices-list">
                        {choices.map(choice => (
                            <li key={choice}>
                                <Link to="/setup">
                                    <button>{choice}</button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </>
    );
}

export default Done;
