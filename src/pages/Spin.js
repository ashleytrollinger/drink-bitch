import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import SPIN from '../images/Spinn.png';
import './Spin.css';

function Spin() {
    const [rotation, setRotation] = useState(0);
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [itemCount, setItemCount] = useState(1);
    const [selectedColor, setSelectedColor] = useState('#fc8eac'); // Default color

    const handleSpinClick = () => {
        const randomRotation = Math.ceil(Math.random() * 3600); // Generate a random rotation value
        setRotation(rotation + randomRotation); // Update the rotation state
    };

    const handleAddItem = () => {
        if (newItem.trim() === '') return;

        const newItemObj = {
            text: newItem,
            count: itemCount,
            color: selectedColor, // Assign the selected color
        };

        setItems([...items, newItemObj]);
        setNewItem('');
    };

    const handleClearWheel = () => {
        setItems([]);
    };

    const wheelStyle = {
        transform: `rotate(${rotation}deg)`,
    };

    return (
        <>
            <Header />
            <section className='nhie'>
            <img src={SPIN} alt="Never Have I Ever"></img>
            </section>
            <div className="body">
                <div className="addItem">
                    <div className='inputs'>
                        <input
                            type="text"
                            placeholder="Text here"
                            value={newItem}
                            onChange={(e) => setNewItem(e.target.value)}
                        />     
                        <input
                            type="color"
                            value={selectedColor}
                            onChange={(e) => setSelectedColor(e.target.value)}
                        />
                    </div>
                    <button onClick={handleAddItem}>+ Add Item</button>

                    <button onClick={handleClearWheel}>Clear Wheel</button>
                </div>
                <div className="container">
                    <div className="spinBtn" onClick={handleSpinClick}>Spin</div>

                    <div className="wheel" style={wheelStyle}>
                        {items.map((item, index) => (
                            <div
                                className="sips"
                                key={index}
                                style={{ '--i': index + 1, '--clr': item.color }} // Use the assigned color
                            >
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <section className='back-section'>
                <Link to='/'>
                    <button className='back'>← Back to Home</button>
                </Link>
            </section>
        </>
    );
}

export default Spin;

