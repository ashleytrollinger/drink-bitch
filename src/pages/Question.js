import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Timer from '../components/Timer';
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
    const navigate = useNavigate();
    const location = useLocation();
    const questions = location.state?.questions;
    console.log('q'+questions);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
    const [timerKey, setTimerKey] = useState(0); // Add a key for the Timer component

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
            }, 1000); // Change color for 1 second and then move to the next question
        } else {
            setIsAnswerCorrect(false);
            setTimeout(() => {
                navigate('/drink');
                setTimeout(() => {
                    goToNextQuestion();
                }, 1000); // Move to the next question after 1 second
            }, 1000); // Go to the Drink page for 1 second
        }
    };

    // Function to handle moving to the next question
    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsAnswerCorrect(null); // Reset the answer correctness state
            // Increment the key to reset the Timer component
            setTimerKey(timerKey + 1);
        } else {
            // Handle end of questions, e.g., show a completion message
        }
    };

    // Function to navigate to 'drink.js' on timeout
    const handleTimeout = () => {
        navigate('/drink');
        // Optionally, you can add a setTimeout here to move to the next question after a delay
        // setTimeout(() => {
        //     goToNextQuestion();
        // }, 1000);
    };

    return (
        <>
            <Header />
            <div className='question-container'>
                {questions ? (
                    <div>
                        <Timer key={timerKey} initialTime={30} onTimeout={handleTimeout} />
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
                )}
            </div>
        </>
    );
}

export default Question;
