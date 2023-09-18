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
                <div className="spinBtn" onClick={handleSpinClick}> Spin</div>
                <div className="wheel" style={wheelStyle}>
                    <div className="sips" style={{ '--i': 1, '--clr': '#fc8eac' }}><span>3 Sips</span></div>
                    <div className="sips" style={{ '--i': 2, '--clr': '#ff6ec7' }}><span>5 Sips</span></div>
                    <div className="sips" style={{ '--i': 3, '--clr': '#ff9999' }}><span>2 Sips</span></div>
                    <div className="sips" style={{ '--i': 4, '--clr': '#e75480' }}><span>Finish Drink</span></div>
                    <div className="sips" style={{ '--i': 5, '--clr': '#fc8eac' }}><span>3 Sips</span></div>
                    <div className="sips" style={{ '--i': 6, '--clr': '#ff6ec7' }}><span>5 Sips</span></div>
                    <div className="sips" style={{ '--i': 7, '--clr': '#fc8eac' }}><span>3 Sips</span></div>
                    <div className="sips" style={{ '--i': 8, '--clr': '#e75480' }}><span>Finish Drink</span></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Spinner;
