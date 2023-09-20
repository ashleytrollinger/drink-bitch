import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Timer from '../components/Timer';
import Drink from './Drink';
import './Question.css';

function shuffleArray(array) {
    // Function to shuffle an array randomly
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function Question() {
    const location = useLocation();
    const questions = location.state?.questions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [timerKey, setTimerKey] = useState(0); // Add a key for the Timer component
    const [showDrink, setShowDrink] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (questions && questions[currentQuestionIndex]) {
            // Shuffle the answers, placing the correct answer randomly among them
            const answers = questions[currentQuestionIndex].incorrect_answers.concat(
                questions[currentQuestionIndex].correct_answer
            );
            const shuffled = shuffleArray(answers);
            setShuffledAnswers(shuffled);
        }
    }, [currentQuestionIndex, questions]);

    // Function to handle clicking an answer
    const handleAnswerClick = (answer) => {
        if (answer === questions[currentQuestionIndex].correct_answer) {
            setIsAnswerCorrect(true);
            setTimeout(() => {
                goToNextQuestion();
            }, 100); // Change color for 1 second and then move to the next question
        } else {
            setIsAnswerCorrect(false);
            setTimeout(() => {
                setShowDrink(true);
                setTimeout(() => {
                    setShowDrink(false);
                    goToNextQuestion();
                }, 20000); // Move to the next question after 1 second
            }, 100); // Go to the Drink page for 1 second
        }
    };

    // Function to handle moving to the next question
    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsAnswerCorrect(null);
            setTimerKey(timerKey + 1);
        } else {
            navigate('/finished')
            // Handle end of questions, e.g., show a completion message
        }
    };

    // Function to navigate to 'drink.js' on timeout
    const handleTimeout = () => {
        setShowDrink(true); // Show the drink component
        setTimeout(() => {
            setShowDrink(false); // Hide the drink component after a delay
            goToNextQuestion();
        }, 5000);
    };

    return (
        <>
            <Header />
            <section className='back-to-menu'>
                <Link to="/setup">
                    <button>← Back to Setup</button>
                </Link>
            </section>
            <div className='question-container' style={{ display: showDrink ? 'none' : 'block' }}>
                {
                    questions ? (
                        <div>
                            <Timer key={timerKey} initialTime={60} onTimeout={handleTimeout} />
                            <h2>Question {currentQuestionIndex + 1}</h2>
                            <p className='question-text'>{questions[currentQuestionIndex].question.replace(/&quot;/g, '"')
                                .replace(/&#039;/g, "'")}
                            </p>
                            <ul className='answer-list'>
                                {shuffledAnswers.map((answer, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => handleAnswerClick(answer)}
                                            className={isAnswerCorrect === null ? '' : isAnswerCorrect ? 'correct' : 'incorrect'}
                                        >
                                            {answer}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>No question data available.</p>
                    )
                }
            </div >
            {showDrink && <Drink />}
        </>
    );
}

export default Question;
