import React, { useState } from 'react';
import './Spinner.css';

function Spinner() {
    const [rotation, setRotation] = useState(0);

    const handleSpinClick = () => {
        const randomRotation = Math.ceil(Math.random() * 3600); // Generate a random rotation value
        setRotation(rotation + randomRotation); // Update the rotation state
    };

    const wheelStyle = {
        transform: `rotate(${rotation}deg)`,
    };

    return (
        <>
        <div className="body">
            <div className="container">
                <div className="spinBtn" onClick={handleSpinClick}> SPIN</div>
                <div className="wheel" style={wheelStyle}>
                    <div className="sips" style={{ '--i': 1, '--clr': '#fc8eac' }}><span>3 Sips</span></div>
                    <div className="sips" style={{ '--i': 2, '--clr': '#ff3ec7' }}><span>5 Sips</span></div>
                    <div className="sips" style={{ '--i': 3, '--clr': '#ff9999' }}><span>1 Sip</span></div>
                    <div className="sips" style={{ '--i': 4, '--clr': '#e75480' }}><span>Finish Drink</span></div>
                    <div className="sips" style={{ '--i': 5, '--clr': '#ff9999' }}><span>1 Sip</span></div>
                    <div className="sips" style={{ '--i': 6, '--clr': '#ff6ec7' }}><span>2 Sips</span></div>
                    <div className="sips" style={{ '--i': 7, '--clr': '#fc3eac' }}><span>Give A Sip</span></div>
                    <div className="sips" style={{ '--i': 8, '--clr': '#ff9999' }}><span>1 Sip</span></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Spinner;
