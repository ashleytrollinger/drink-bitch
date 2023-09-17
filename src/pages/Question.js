import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Question() {
    const location = useLocation();
    const questions = location.state?.questions;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Function to handle moving to the next question
    const goToNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Handle end of questions, e.g., show a completion message
        }
    };

    return (
        <div>
            {questions ? (
                <div>
                    <h2>Question {currentQuestionIndex + 1}</h2>
                    <p>{questions[currentQuestionIndex].question}</p>
                    <ul>
                        {questions[currentQuestionIndex].incorrect_answers.map((answer, index) => (
                            <li key={index}>{answer}</li>
                        ))}
                        <li>{questions[currentQuestionIndex].correct_answer}</li>
                    </ul>
                    <button onClick={goToNextQuestion}>Next Question</button>
                </div>
            ) : (
                <p>No question data available.</p>
            )}
        </div>
    );
}

export default Question;

