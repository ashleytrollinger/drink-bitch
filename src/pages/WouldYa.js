import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import WYR from '../images/WYR.png';
import QUESTION from '../images/QUESTION.png';
import './WouldYa.css';

function WouldYouRather() {
    const [question, setQuestion] = useState('');
    const [rating, setRating] = useState('PG'); // Default rating

    const handleRatingChange = (event) => {
        setRating(event.target.value); // Update the selected rating
    };

    const fetchWouldYouRather = async () => {
        try {
            const response = await fetch(`https://api.truthordarebot.xyz/api/wyr?rating=${rating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch "Would You Rather" question.');
            }
            const data = await response.json();
            setQuestion(data.question); // Extract and set only the question
        } catch (error) {
            console.error('Error fetching "Would You Rather" question:', error);
        }
    };

    return (
        <>
            <Header />
            <section className='nhie'>
            <img src={WYR} alt="Would You Rather"></img>
            </section>
            <div className='WYR'>
                <div>
                    <label className='rating'>
                        Select Rating:
                        <select value={rating} onChange={handleRatingChange}>
                            <option value="PG">PG13</option>
                            <option value="R">R</option>
                        </select>
                    </label>
                </div>
                <div className='btn-class'>
                    <button onClick={fetchWouldYouRather}><img src={QUESTION} alt='Get Prompt'></img></button>
                </div>
                {question && (
                    <div className='populated'>
                        <p className='poptod'>{question}</p>
                    </div>
                )}

            </div>
            <section className='back-section'>
                <Link to='/'>
                    <button className='back'>←Back to Home</button>
                </Link>
            </section>
        </>
    );
}

export default WouldYouRather;
