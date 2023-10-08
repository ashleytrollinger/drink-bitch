import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TOD from '../images/TOD.png';
import './TruthDare.css';

function TruthOrDare() {
    const [truth, setTruth] = useState('');
    const [dare, setDare] = useState('');
    const [rating, setRating] = useState('pg13'); // Default rating
    const [randomSips, setRandomSips] = useState(null); // State to store the random number of sips
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRatingChange = (event) => {
        setRating(event.target.value); // Update the selected rating
    };

    const generateRandomSips = () => {
        // Generate a random number between 1 and 3
        const randomSipCount = Math.floor(Math.random() * 3) + 1;
        setRandomSips(randomSipCount);
    };

    const fetchTruth = async () => {
        try {
            // Generate random sips when fetching truth
            generateRandomSips();

            const response = await fetch(`https://api.truthordarebot.xyz/v1/truth?rating=${rating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch truth statement.');
            }
            const data = await response.json();
            setTruth(data.question);
            setSelectedOption('truth');
        } catch (error) {
            console.error('Error fetching truth:', error);
        }
    };

    const fetchDare = async () => {
        try {
            // Generate random sips when fetching dare
            generateRandomSips();

            const response = await fetch(`https://api.truthordarebot.xyz/v1/dare?rating=${rating}`);
            if (!response.ok) {
                throw new Error('Failed to fetch dare statement.');
            }
            const data = await response.json();
            setDare(data.question);
            setSelectedOption('dare');
        } catch (error) {
            console.error('Error fetching dare:', error);
        }
    };

    return (
        <>
            <Header />
            <section className='tod-body'>
                <section className='img-con'>
                    <img src={TOD} alt="Truth or Dare"></img>
                </section>
                <section className='tord-section'>
                    <div className='rating'>
                        <label>
                            Select Rating:
                            <select value={rating} onChange={handleRatingChange}>
                                <option value="pg13">PG-13</option>
                                <option value="r">R</option>
                            </select>
                        </label>
                    </div>
                    <div className='btn-class'>
                        <button onClick={fetchTruth}>TRUTH</button>
                        <p>OR</p>
                        <button onClick={fetchDare}>DARE</button>
                    </div>
                    <div className='populated'>
                        {selectedOption === 'truth' && (
                            <p className='poptod'>Truth: {truth}</p>
                        )}
                        {selectedOption === 'dare' && (
                            <p className='poptod'>Dare: {dare}</p>
                        )}
                        {selectedOption === 'truth' && (
                            <p>If you choose not to do the truth or dare, you must have {randomSips} sip(s).</p>
                        )}
                        {selectedOption === 'dare' && (
                            <p>If you choose not to do the dare or truth, you must have {randomSips} sip(s).</p>
                        )}
                    </div>
                </section>
                <section className='back-section'>
                    <Link to='/'>
                        <button className='back'>←Back to Home</button>
                    </Link>
                </section>
            </section>
        </>
    );
}

export default TruthOrDare;
