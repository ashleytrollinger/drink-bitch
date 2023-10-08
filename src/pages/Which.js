import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NHIE from '../images/NHIE.png';
import './Never.css';

function WhichBitch() {
    const [prompt, setPrompt] = useState('');
    const [rating, setRating] = useState('pg13'); // Default rating
    const [randomSips, setRandomSips] = useState(null);

    // Function to fetch a random "Which B*tch" prompt
    const fetchRandomPrompt = async () => {
        try {
            const randomRating = Math.random() < 0.5 ? 'pg13' : 'r';

            const response = await fetch(`https://api.truthordarebot.xyz/api/paranoia?rating=${randomRating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch "Which B*tch" prompt.');
            }
            const data = await response.json();
            setPrompt(data.question);

            // Generate a random number of sips (1-3) if the user hasn't done the prompt
            if (data.question && !data.done) {
                const randomSipCount = Math.floor(Math.random() * 3) + 1;
                setRandomSips(randomSipCount);
            } else {
                // Reset the random sips if the user has done the prompt
                setRandomSips(null);
            }
        } catch (error) {
            console.error('Error fetching "Which B*tch" prompt:', error);
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
                <img src={NHIE} alt="Which B*tch"></img>
            </section>
            <div className='WYR'>
                <div className='btn-class'>
                    <button onClick={fetchRandomPrompt}>Get Prompt</button>
                </div>
                <div className='populated'>
                    <p>{prompt}</p>
                    {randomSips !== null && (
                        <p>If you are the one voted, take {randomSips} sip(s).</p>
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

export default WhichBitch;

