import React, { useEffect } from 'react';
import Header from '../components/Header';
import Spinner from "../components/Spinner";
import './Drink.css';

function Drink() {
    return (
        <>
            <Header />
            <p>Use Browswer back button to return to quiz</p>
            <Spinner />

        </>
    );
}

export default Drink;


