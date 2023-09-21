import React, { useState, useEffect } from
    'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NHIE from '../images/NHIE.png';
import './Never.css';

function NeverHaveIEver() {
    const [prompt, setPrompt] = useState('');
    const [rating, setRating] = useState('pg13'); // Default rating
    const [randomSips, setRandomSips] = useState(null);

    // Function to fetch a random "Never Have I Ever" prompt
    const fetchRandomPrompt = async () => {
        try {
            const randomRating = Math.random() < 0.5 ? 'pg13' : 'r';

            const response = await fetch(`https://api.truthordarebot.xyz/api/nhie?rating=${randomRating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch NHIE prompt.');
            }
            const data = await response.json();
            setPrompt(data.question);

            // Generate a random number of sips (1-6) if the user hasn't done the prompt
            if (data.question && !data.done) {
                const randomSipCount = Math.floor(Math.random() * 4) + 1;
                setRandomSips(randomSipCount);
            } else {
                // Reset the random sips if the user has done the prompt
                setRandomSips(null);
            }
        } catch (error) {
            console.error('Error fetching NHIE prompt:', error);
        }
    };

    useEffect(() => {
        // Fetch a random prompt when the component mounts or when the rating changes
        fetchRandomPrompt();
    }, [rating]);

    return (
        <>
            <Header />
            <section className='nhie'>
            <img src={NHIE} alt="Never Have I Ever"></img>
            </section>
            <div className='WYR'>
                <div className='btn-class'>
                    <button onClick={fetchRandomPrompt}>Get Prompt</button>
                </div>
                <div className='populated'>
                    <p >{prompt}</p>
                    {randomSips !== null && (
                        <p>If you've ever done this, you must take {randomSips} sip(s).</p>
                    )}
                </div>
            </div>
            <section className='back-section'>
                <Link to='/'>
                    <button className='back'>←Back to Home</button>
                </Link>
            </section>
        </>
    );
}

export default NeverHaveIEver;
