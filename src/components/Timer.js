import React, { useState, useEffect } from 'react';
import './Timer.css';
function CountdownTimer({ initialTime, onTimeout }) {
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        if (timeRemaining <= 0) {
            // Time is up, trigger the timeout callback
            onTimeout(); // Call the onTimeout callback
        } else {
            // Decrease the time remaining every second
            const timer = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);

            return () => {
                // Clear the timer when the component unmounts or when the time is up
                clearTimeout(timer);
            };
        }
    }, [timeRemaining, onTimeout]);

    return (
        <div className='timer'>
            <p>{timeRemaining} seconds</p>
        </div>
    );
}

export default CountdownTimer;
