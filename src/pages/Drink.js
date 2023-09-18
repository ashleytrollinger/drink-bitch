import React, { useEffect, useState } from 'react';
import Spinner from "../components/Spinner";
import './Drink.css';

function Drink() {
    const [isVisible, setIsVisible] = useState(true);
    const [countdown, setCountdown] = useState(20);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevCountdown => prevCountdown - 1);
        }, 1000);

        if (countdown === 0) {
            setIsVisible(false);
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [countdown]);

    return (
        <>
            <div className={`drink-container ${isVisible ? 'visible' : 'hidden'}`}>
                <p>Next question will appear in exactly {countdown} seconds.</p>
                <Spinner />
            </div>
        </>
    );
}

export default Drink;
