import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Welcome() {
    return (
        <>
            <Header />

            <Link to="/setup">
                <button>Get Started</button>
            </Link>
        </>
    );
}
export default Welcome;