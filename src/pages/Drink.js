import React, { useEffect, useState } from 'react';
import Spinner from "../components/Spinner";
import './Drink.css';

function Drink() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return (
        <>
            <div className={`drink-container ${isVisible ? 'visible' : 'hidden'}`}>
                <p>Next question will appear in exactly 1 minute.</p>
                <Spinner />
            </div>
        </>
    );
}

export default Drink;


